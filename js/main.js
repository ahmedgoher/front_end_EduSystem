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
