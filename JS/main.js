
import { showMessage } from "./moduleFile/alert.js" // Alert File
import { getPosts } from "./moduleFile/api.js"  //Api File
import { showModal, closeModal } from "./moduleFile/modal.js"
import { handleLogin } from "./moduleFile/auth/login.js"  
import { handleLogout } from "./moduleFile/auth/logout.js";
import { updateUiOnLogin, updateUiOnLogout } from "./moduleFile/event.js";
import { handleRegister } from "./moduleFile/auth/register.js";
import { createPost } from "./moduleFile/createPost.js";

// Show And Close Modal 
showModal("login" ,"focus-modal-login");closeModal("exit-login","focus-modal-login");closeModal("close-login","focus-modal-login");
showModal("register" ,"focus-modal-register");closeModal("exit-register","focus-modal-register");closeModal("close-register","focus-modal-register"); 
showModal("create" ,"focus-modal-create");closeModal("exit-create","focus-modal-create");closeModal("close-create","focus-modal-create"); 

// handle on click get apis and update ui data 
handleLogin()
handleRegister()

// handle on click update ui data
handleLogout()

//
window.onload = () => {
  // on load save login if find the token
  let token = localStorage.getItem("token")
  if (token == null) {
    updateUiOnLogout()
  }else {
    updateUiOnLogin("focus-modal-login")
  }

  // Show Message on Created post
  let action = localStorage.getItem("msgCreatedPost")
  if (action === "showMessage") {
    showMessage("Post created successfully", 10000)
    localStorage.removeItem("msgCreatedPost")
  }
}

// Get post request
getPosts()

// Post Create Post Request 
createPost()




