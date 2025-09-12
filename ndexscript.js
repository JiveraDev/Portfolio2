document.getElementById("Resume").addEventListener("click", function () {
  window.alert("Go to my Resume?");
});

// animation for the Typewriting

// modal
const myModal = document.getElementById("modaldataCert");

myModal.addEventListener("shown.bs.modal", () => {});

document.addEventListener("DOMContentLoaded", function () {
  const modalImg = document.getElementById("imagecert");

  document
    .querySelectorAll("[data-bs-target='#modaldataCert']")
    .forEach((link) => {
      link.addEventListener("click", function () {
        const imgPath = this.getAttribute("data-img");
        if (modalImg) {
          modalImg.setAttribute("src", imgPath);
        } else {
          console.error("certImage element not found!");
        }
      });
    });
});

// typewriting animation
// animation for type writing
document.getElementById("typewriter").innerHTML = "";
const text = "Information are just collection of data";
const speed = 80; // typing speed in ms
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
