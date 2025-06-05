import { showMessage } from "../alert.js"
import { loginRequest } from "../api.js" 
import { updateUiOnLogin } from "../event.js"

// Handle Login [ Get Apis Request / Update UI / Show Messgge ]
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