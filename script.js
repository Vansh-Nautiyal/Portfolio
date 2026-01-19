const contactBtn = document.getElementById("contactBtn");
const contactMenu = document.getElementById("contactMenu");

// toggle menu
contactBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent closing immediately
  contactMenu.classList.toggle("show");
});

// close when clicking outside
document.addEventListener("click", () => {
  contactMenu.classList.remove("show");
});

//Toggle Display of about section
const aboutbtn = document.getElementById("aboutbtn")
const aboutsection = document.getElementById("about")
aboutsection.classList.add("hidden");

aboutbtn.addEventListener("click", () => {
  aboutsection.classList.remove("hidden");
})
