let nav = document.querySelector("nav");
let btn = document.querySelector("i");
btn.addEventListener("click", () => {
  if (nav.style.height == "50px") {
    btn.style.transform = "rotate(90deg)";
    nav.style.height = "300px";
  } else {
    btn.style.transform = "rotate(0deg)";
    nav.style.height = "50px";
  }
});
