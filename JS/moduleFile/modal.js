// Show Modal 
export function showModal(buttonID, modalID) {
  document.getElementById(buttonID).addEventListener("click", () => {
    document.getElementById(modalID).classList.add("show-modal")
  })
}
// Close Modal 
export function closeModal(buttonID, modalID) {
  document.getElementById(buttonID).addEventListener("click", () => {
    document.getElementById(modalID).classList.remove("show-modal")
  })
}

// Remember [ create function => Window On Click (Close Modal)]



// Old Code

// // Open modal 
// export function openModal(modal) {
//   document.getElementById(modal).addEventListener("click", () => {
//     document.getElementById(`${modal}-modal`).style.display = "block"
//     document.getElementById(`focus-modal-${modal}`).style.display = "block"
//   })
// }
// // Close Modal
// export function closeModal(btn, modal) {
//   document.getElementById(`${btn}-${modal}`).addEventListener("click", () => {
//     document.getElementById(`${modal}-modal`).style.display = "none"
//     document.getElementById(`focus-modal-${modal}`).style.display = "none"
//   })
// }

