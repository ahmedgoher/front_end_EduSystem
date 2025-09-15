const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".side");
const main = document.getElementById("mainpage");
const Subjectspage = document.getElementById("Subjectspage");
const Reportspage = document.getElementById("Reportspage");
const Billingpage = document.getElementById("Billingpage");
const Notificationspage = document.getElementById("Notificationspage");
const Settingspage = document.getElementById("Settingspage");
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

let queryss = document.querySelectorAll(".dashbtn");
let bodycontent = document.querySelectorAll(".bodycontent");
// bodycontent.forEach((btn) => {
//   btn.addEventListener("click",function () {
//     bodycontent.forEach((b) => b.classList.remove("active"));

//   })
// }

// );
queryss.forEach((btn) => {
  btn.addEventListener("click", function () {
    queryss.forEach((b) => b.classList.remove("active", "text-white"));
    bodycontent.forEach((b) => {
      b.classList.remove("active");
    });

    this.classList.add("active", "text-white");
    if (
      this.classList.contains("#mainpage") &&
      this.classList.contains("active", "text-white")
    ) {
      main.classList.add("active");
    }
    if (
      this.classList.contains("#Subjectspage") &&
      this.classList.contains("active", "text-white")
    ) {
      Subjectspage.classList.add("active");
    }
    if (
      this.classList.contains("#Reportspage") &&
      this.classList.contains("active", "text-white")
    ) {
      Reportspage.classList.add("active");
    }
    if (
      this.classList.contains("#Billingpage") &&
      this.classList.contains("active", "text-white")
    ) {
      Billingpage.classList.add("active");
    }
    if (
      this.classList.contains("#Notificationspage") &&
      this.classList.contains("active", "text-white")
    ) {
      Notificationspage.classList.add("active");
    }
    if (
      this.classList.contains("#Settingspage") &&
      this.classList.contains("active", "text-white")
    ) {
      Settingspage.classList.add("active");
    }
  });
});

let dropdownItems = document.querySelectorAll(".dropdown-item");
let subjectInput = document.getElementById("studentName");
let tables = document.querySelectorAll(".subject-table");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    // النص في input
    subjectInput.value = this.textContent.trim();

    // أخفي كل الجداول
    tables.forEach((t) => t.classList.add("d-none"));

    // أظهر الجدول المختار
    let subjectId = this.getAttribute("data-subject");
    document.getElementById(subjectId).classList.remove("d-none");
  });
});
