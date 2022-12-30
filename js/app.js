"use strict";

let fillerBox = document.querySelector(".input__filler-inner"),
  filterBtn = document.querySelectorAll(".job-list__filters-item"),
  vacancyItem = document.querySelectorAll(".job-list__box"),
  fillerItem,
  fillerArray = [],
  eachVal;

vacancyItem.forEach((e, i) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      json.map((item, index) => {
        if (index == i) {
          e.dataset.role = item.role;
          e.dataset.level = item.level;
          e.dataset.languages = item.languages;
          e.dataset.tools = item.tools;
        }
      });
    });
});

function filtering(arr1, arr2) {
  arr2.forEach((e2) => {
    e2.classList.add("hide__item");
    setTimeout(() => {
      e2.style.display = "none";
    }, 500);
    let dataVal = String(Object.values(e2.dataset)).split(",");
    eachVal = dataVal.filter((e) => {
      return arr1.indexOf(e) >= 0;
    });
    dataVal.forEach((e) => {
      if (eachVal.indexOf(e) >= arr1.length - 1) {
        e2.classList.remove("hide__item");
        setTimeout(() => {
          e2.style.display = "";
        }, 500);
      }
    });
  });
}

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
    filtering(fillerArray, vacancyItem);
  });
});

document.querySelector("body").addEventListener("click", (i) => {
  if (i.target.classList.contains("cross-img")) {
    let closeItem = i.target.closest(".input__filler-item");
    fillerArray.forEach((v, i) => {
      if (closeItem.textContent == v) {
        eachVal.splice(i, 1);
        fillerArray.splice(i, 1);
        filtering(fillerArray, vacancyItem);
        closeItem.remove();
      }
    });
  }
  if (i.target.classList.contains("clear-btn")) {
    eachVal.splice(0, eachVal.length);
    fillerArray.splice(0, fillerArray.length);
    filtering(fillerArray, vacancyItem);
    document.querySelectorAll(".input__filler-item").forEach((e) => e.remove());
  }
});
