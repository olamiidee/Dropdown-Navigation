const dropdown1 = document.querySelector(".dropdown1");
const dropdownContent1 = document.querySelector(".content1");

const dropdown2 = document.querySelector(".dropdown2");
const dropdownContent2 = document.querySelector(".content2");

const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");

dropdown1.addEventListener("mouseover", () => {
  dropdownContent1.style.display = "block";
  arrow1.src = "/images/icon-arrow-down.svg";
});

dropdown1.addEventListener("mouseout", () => {
  dropdownContent1.style.display = "none";
  arrow1.src = "/images/icon-arrow-up.svg";
});

dropdown2.addEventListener("mouseover", () => {
  dropdownContent2.style.display = "block";
  arrow2.src = "/images/icon-arrow-down.svg";
});

dropdown2.addEventListener("mouseout", () => {
  dropdownContent2.style.display = "none";
  arrow2.src = "/images/icon-arrow-up.svg";
});
