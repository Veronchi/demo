import "./styles/style.scss";

const dropdown = document.querySelector(".dropdown");
const dropdownLabel = document.querySelector(".dropdown__label");
const dropdownInput = document.querySelector(".dropdown__input");
const dropdownList = document.querySelector(".dropdown__list");

const range = document.querySelector(".range");
const rangeLabel = document.querySelector(".range__label");

const dotsArr = [...document.querySelectorAll(".dots__item")];

dropdownLabel.addEventListener("click", toggle);

dropdownList.addEventListener("click", (e) => {
  dropdownLabel.innerText = e.target.innerText;
  dropdownInput.value = e.target.innerText;
  toggle();
});

function toggle() {
  dropdown.classList.toggle("dropdown_active");
  dropdownLabel.classList.toggle("dropdown__label_active");
  dropdownList.classList.toggle("dropdown__list_visible");
}

range.addEventListener("input", (e) => {
  rangeLabel.innerText = e.target.value + "%";
});

function animation(arr, count = 0) {
  const size = arr.length;
  frame(getDots(arr, count, 3)).then(() => {
    if (size - 1 > count) {
      animation(arr, ++count);
    } else {
      animation(arr, 0);
    }
  });
}

function frame(dots) {
  dots.map((elem) => elem.classList.add("dots__item_active"));
  return new Promise((res, rej) => {
    setTimeout(() => {
      dots.map((elem) => elem.classList.remove("dots__item_active"));
      res();
    }, 500);
  });
}

function getDots(arr, step, amount) {
  const result = [];
  if (step + amount > arr.length) return result;
  for (let index = step; index < step + amount; index++) {
    result.push(arr[index]);
  }

  return result;
}

animation(dotsArr);
