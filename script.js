const panels = document.querySelectorAll(".panel");
const body = document.querySelector("body");

const backgroundColors = ["#84a5b8", "#fde4de", "#C3D6BA", "#FCDCB1"];

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    body.style.backgroundColor = backgroundColors[index];
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
