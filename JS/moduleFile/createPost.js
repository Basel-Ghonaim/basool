import { createPostRequest } from "./api.js";

export function createPost() {
  let createButton = document.getElementById("create-btn");
  createButton.addEventListener("click", async () => {
    await createPostRequest()
    console.log("done")
  })
}

