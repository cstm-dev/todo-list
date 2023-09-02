const todoBtn = document.querySelectorAll(".todo-btn");

todoBtn.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.value === "false") {
      e.value = "true"
    } else {
      e.value = "false"
    }
  })
})