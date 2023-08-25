const todoElement = document.querySelectorAll(".todo-text");

todoElement.forEach((e) => {
  let todoText = e.children[0].children[0].children[0];
  let todoCheckmark = e.children[1].children[0];

  todoCheckmark.addEventListener("click", () => {
    if (todoCheckmark.src.includes("checkmark_unchecked")) {
      todoText.classList.toggle("text-decoration-line-through");
      todoCheckmark.src = "/assets/images/checkmark_checked.png";
      todoCheckmark.alt = "Checkmark checked";
    } else {
      todoText.classList.toggle("text-decoration-line-through");
      todoCheckmark.src = "/assets/images/checkmark_unchecked.png";
      todoCheckmark.alt = "Checkmark unchecked";
    }
  });
});
