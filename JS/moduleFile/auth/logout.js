import { showMessage } from "../alert.js"
import { updateUiOnLogout } from "../event.js"

// Handle Logout [ Remove Token,User / Update UI / Show Message ]
export function handleLogout() {
  let logoutBtn = document.getElementById("logout-btn")
  logoutBtn.addEventListener("click", () => {
    // remove the token and user from localstorge 
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    // update ui in logout
    updateUiOnLogout()
    showMessage("logout successful, Good Bye")
  })
}