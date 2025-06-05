// Events in login succesful
const loginLinks = document.querySelector(".login-links");
const loginSuccess = document.querySelector(".login-success");
const createBtn = document.getElementById("create")


export function updateUiOnLogin(modals) {
  // close Modal
  document.getElementById(modals).classList.remove("show-modal");
  // show logout button and hide button [register, login]
  if (loginLinks) loginLinks.style.display = "none";
  if(loginSuccess) loginSuccess.style.display = "flex";
  // Enter the user name and profile photo 
  const username = document.getElementById("username");
  const profilePhoto = document.getElementById("profile-photo");
  if (username) username.textContent = JSON.parse(localStorage.getItem("user")).username;
  if (profilePhoto) {
    if (localStorage.getItem("user")){
      profilePhoto.src = JSON.parse(localStorage.getItem("user")).profile_image;
    }
  }
  // Show Create Post 
  createBtn.style.display = "block"
}

export function updateUiOnLogout() {
  // show [logout , register] button and hide logout and create post button
  if (loginLinks) loginLinks.style.display = "flex";
  if(loginSuccess) loginSuccess.style.display = "none";
  createBtn.style.display = "none"
}
