"use strict";
// fetch("/data.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let fillerBox = document.querySelector(".input__filler-inner"),
  filterBtn = document.querySelectorAll(".job-list__filters-item"),
  clearBtn = document.querySelector(".clear-btn");

filterBtn.forEach((e) => {
  e.addEventListener("click", (i) => {
    let fillerArray = [...fillerBox.childNodes];
    let fillerItem = document.createElement("div");
    fillerItem.className = "input__filler-item";
    fillerItem.innerHTML = `${i.target.innerHTML}`;
    fillerBox.append(fillerItem);
    fillerItem.insertAdjacentHTML(
      "beforeend",
      `<img
      class="cross-img"
      src="./images/icon-remove.svg"
      alt=""
    />`
    );
    fillerArray.filter((word) => {
      if (word.textContent == i.target.innerHTML) {
        fillerItem.remove();
      }
    });
  });
});
