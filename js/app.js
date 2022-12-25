"use strict";

let fillerBox = document.querySelector(".input__filler-inner"),
  filterBtn = document.querySelectorAll(".job-list__filters-item"),
  fillerItem,
  fillerArray = [];

filterBtn.forEach((e) => {
  e.addEventListener("click", (i) => {
    fillerItem = document.createElement("div");
    fillerItem.className = "input__filler-item";
    fillerItem.innerHTML = `${i.target.innerHTML}`;
    if (fillerArray.includes(fillerItem.textContent)) {
      return;
    } else {
      fillerArray.push(i.target.textContent);
      fillerBox.append(fillerItem);
      fillerItem.insertAdjacentHTML(
        "beforeend",
        `<img
      class="cross-img"
      src="./images/icon-remove.svg"
      alt="cross-img"
    />`
      );
    }
  });
});

document.querySelector("body").addEventListener("click", (i) => {
  if (i.target.classList.contains("cross-img")) {
    let closeItem = i.target.closest(".input__filler-item");
    fillerArray.forEach((v, i) => {
      if (closeItem.textContent == v) {
        fillerArray.splice(i, 1);
        closeItem.remove();
      }
    });
  }
  if (i.target.classList.contains("clear-btn")) {
    fillerArray.splice(0, fillerArray.length);
    document.querySelectorAll(".input__filler-item").forEach((e) => e.remove());
  }
});
