export function showMessage(message, timer = 4000) {
  let myAlert = document.getElementById("alert-message")
  let messageAlert = document.querySelector("#alert-message .text-alert")
  // show alert
  if(myAlert) myAlert.style.setProperty("display", "flex")
  if(messageAlert) messageAlert.textContent = message;
  setTimeout(() => {
  if(myAlert) myAlert.style.setProperty("display", "none")
  }, timer);
  // close alert 
  let closeAlert = document.querySelector("#alert-message .close-alert")
  closeAlert.addEventListener("click", () => {
    if(myAlert) myAlert.style.setProperty("display", "none")
  })
}