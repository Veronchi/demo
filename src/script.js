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

function test(arr, count = 0) {
  const size = arr.length;
  request(arr[count]).then(() => {
    if (size - 1 > count) {
      test(arr, ++count);
    } else {
      test(arr, 0);
    }
  });
}

function request(dot) {
  dot.classList.add("dots__item_active");
  return new Promise((res, rej) => {
    setTimeout(() => {
      dot.classList.remove("dots__item_active");
      res();
    }, 500);
  });
}

test(dotsArr);
