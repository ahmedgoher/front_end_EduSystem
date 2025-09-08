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

Subjectspage.onclick = function () {
  Subjectspage.classList.add("active");
};
// let btn = [
//   mainpage,
//   Subjectspage,
//   Reportspage,
//   Teacherspage,
//   Billingpage,
//   Notificationspage,
//   Settingspage,
// ];

// function addactive(clickbtn) {
//   btn.forEach((b) => b.classList.remove("active", "text-white")); // نشيل الكلاسات من الكل
//   clickbtn.classList.add("active", "text-white");
// }

// btn.forEach((b) => {
//   b.addEventListener("click", function () {
//     setActive(this);
//   });
// });
