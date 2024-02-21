const ol = document.querySelector("ol");
const div = document.querySelector("div");

ol.addEventListener("click", (e) => {
  e.target.style.color = `rgb(${Math.floor(Math.random() * 257)},${Math.floor(
    Math.random() * 257
  )},${Math.floor(Math.random() * 257)})`;
});

div.addEventListener("click", (e) => {
  e.target.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 257
  )},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)})`;
});
