const block = document.querySelector(".block");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
block.addEventListener("click", () => {
  line1.classList.toggle("trans1");
  line2.classList.toggle("trans2");
  line3.classList.toggle("trans3");
});
