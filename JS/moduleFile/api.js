import { readFileAsBase64 } from "./utils.js"

// Base Url 
const baseUrl = "https://tarmeezacademy.com/api/v1"

// login Request
export async function loginRequest() {
  let userName = document.getElementById("email-login").value
  let password = document.getElementById("password-login").value
  let url = "/login"
  let param = {
    "username" : userName,
    "password" : password
  }
  try {
    const response = await axios.post(`${baseUrl}${url}`, param)
    let token = response.data.token
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(response.data.user))
    return true;
  } catch(error) {
      console.log(error.response?.data?.message || "Login failed");
      return false;
  }
}

// Register Request
export async function registerRequest() {
  let name = document.getElementById("name-register").value;
  let userName = document.getElementById("username-register").value;
  let email = document.getElementById("email-register").value;
  let password = document.getElementById("password-register").value;
  let choiceFile = document.getElementById("choose-image-register");

  let base64Image = null;

  if (choiceFile.files.length > 0) {
    base64Image = await readFileAsBase64(choiceFile.files[0]);
  }

  return await sendRegisterRequest();

  async function sendRegisterRequest() {
    let url = "/register";
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", choiceFile.files[0]);
    try {
      const response = await axios.post(`${baseUrl}${url}`, formData);
      let token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return true;
    } catch (error) {
      console.log(error.response?.data?.message || "Registration failed");
      return false;
    }
  }
}

// Get Post Request
export function getPosts(){
  let url = "/posts?limit=100"
  axios.get(`${baseUrl}${url}`)
  .then(response => {
    let posts = response.data.data
    for(let post of posts) {
      let posts = document.getElementById("posts")
      let content = `
        <div class="post">
          <div class="header-post">
            <img class="user-img" src="${post.author.profile_image}" alt="Not Found">
            <h2 class="user-name">${post.author.username}</h2>
          </div>
          <div class="body-post">
            <div class="img-post">
              <img src="${post.image}" alt="Not Found">
              <p>${post.created_at}</p>
            </div>
            <div class="content-post">
              <h1 class="title-post">${post.title}</h1>
              <p class="disc-post">${post.body}</p>
            </div>
            <div class="comment-post">
              <div class="comment-post">
                <span class="icons"></span>
                <span>${post.comments_count} Comments</span>
                <span>${(post.tags)}</span>
              </div>
            </div>
          </div>
        </div>
      `
      posts.innerHTML += content
    }
  }).catch(error => {
    let errors = error.response.data.message
    alert(errors)
  })
}

// Create Post Request
export async function createPostRequest() {
  let url = "/posts"
  let token = localStorage.getItem("token")

  let title = document.getElementById("title-create").value
  let body = document.getElementById("content-create").value
  let imge = document.getElementById("img-create-post")
  let formData = new FormData()
  formData.append("title", title)
  formData.append("body", body)
  formData.append("image", imge.files[0]);
  
  try {
    const response = await axios.post(`${baseUrl}${url}`, formData, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    localStorage.setItem("msgCreatedPost", "showMessage")
    window.location.reload()
    return true
  } catch(error) {  
    console.log(error.response.data.message)
    return false
  }
}

