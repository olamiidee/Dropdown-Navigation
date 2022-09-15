// Desktop Section
const dropdown1 = document.querySelector(".dropdown1");
const dropdownContent1 = document.querySelector(".content1");

const dropdown2 = document.querySelector(".dropdown2");
const dropdownContent2 = document.querySelector(".content2");

const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");

dropdown1.addEventListener("mouseover", () => {
  dropdownContent1.style.display = "block";
  arrow1.src = "/images/icon-arrow-up.svg";
});

dropdown1.addEventListener("mouseout", () => {
  dropdownContent1.style.display = "none";
  arrow1.src = "/images/icon-arrow-down.svg";
});

dropdown2.addEventListener("mouseover", () => {
  dropdownContent2.style.display = "block";
  arrow2.src = "/images/icon-arrow-up.svg";
});

dropdown2.addEventListener("mouseout", () => {
  dropdownContent2.style.display = "none";
  arrow2.src = "/images/icon-arrow-down.svg";
});

// Mobile Menu Section

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const dropdown3 = document.querySelector(".dropdown3");
const dropdownContent3 = document.querySelector(".content3");

const dropdown4 = document.querySelector(".dropdown4");
const dropdownContent4 = document.querySelector(".content4");

const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");

// Hamburger Toggle

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// dropdown 3

dropdown3.addEventListener("mouseover", () => {
  dropdownContent3.style.display = "block";
  arrow3.src = "/images/icon-arrow-up.svg";
});

dropdown3.addEventListener("mouseout", () => {
  dropdownContent3.style.display = "none";
  arrow3.src = "/images/icon-arrow-down.svg";
});

// dropdown 4

dropdown4.addEventListener("mouseover", () => {
  dropdownContent4.style.display = "block";
  arrow4.src = "/images/icon-arrow-up.svg";
});

dropdown4.addEventListener("mouseout", () => {
  dropdownContent4.style.display = "none";
  arrow4.src = "/images/icon-arrow-down.svg";
});
