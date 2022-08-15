let scrollLeft = document.querySelectorAll(
  ".scroll-effect .scroll-effect-left"
);
let scrollRight = document.querySelectorAll(
  ".scroll-effect .scroll-effect-right"
);

window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  effect(scrollLeft);
  effect(scrollRight);
}

function effect(active) {
  const triggerBottom = (window.innerHeight / 5) * 4;
  active.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("scroll-effect-active");
    } else {
      box.classList.remove("scroll-effect-active");
    }
  });
}
