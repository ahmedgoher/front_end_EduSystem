const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".side");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

let queryss = document.querySelectorAll(".dashbtn");
queryss.forEach((btn) => {
  btn.addEventListener("click", function () {
    queryss.forEach((b) => b.classList.remove("active", "text-white"));
    this.classList.add("active", "text-white");
  });
});
