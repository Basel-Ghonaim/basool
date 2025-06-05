import { showMessage } from "../alert.js"
import { registerRequest } from "../api.js"
import { updateUiOnLogin } from "../event.js"

// Handle Register [ Get Apis Request / Update UI / Show Messgge ]
export function handleRegister() {
  let registerBtn = document.getElementById("regBtn")
  registerBtn.addEventListener("click", async() => {
    await registerRequest()
    let token = localStorage.getItem("token")
    if (token){
      updateUiOnLogin("focus-modal-register")
      showMessage(`register successful, Hi ${JSON.parse().username}`)
    }
  })
}
