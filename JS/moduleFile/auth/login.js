import { showMessage } from "../alert.js"
import {getPosts, loginRequest, registerRequest} from "../api.js"  //Api File
import { updateUiOnLogin , updateUiOnLogout} from "../event.js"

export function handleLogin() {
  let loginBtn = document.querySelector(".login-btn")
  loginBtn.addEventListener("click", async() => {
    await loginRequest()
    let token = localStorage.getItem("token")
    if (token){
      updateUiOnLogin("focus-modal-login")
      showMessage(`Login successful, Hi ${JSON.parse(localStorage.getItem("user")).username}`)
    }
  })
}