// const menuToggle = document.getElementById("menu-toggle");
// const sidebar = document.querySelector(".side");

// menuToggle.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
// });
// let queryss = document.querySelectorAll(".dashbtn");
// queryss.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     queryss.forEach((b) => b.classList.remove("active", "text-white"));
//     this.classList.add("active", "text-white");
//   });
// });

// // kkkkkkkkkkkkkkkkkkkkk
// let links = document.querySelectorAll(".nav-link");
// let pages = document.querySelectorAll(".page");

// links.forEach(link => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     links.forEach(l => {
//       l.classList.remove("active", "text-white");
//       l.classList.add("disactive");
//     });

//     this.classList.add("active", "text-white");
//     this.classList.remove("disactive");

//     pages.forEach(p => p.classList.add("d-none"));

//     let targetId = this.getAttribute("data-target");
//     if (targetId) {
//       let targetPage = document.getElementById(targetId);
//       if (targetPage) {
//         targetPage.classList.remove("d-none");
//       } else {
//         console.warn("مفيش صفحة بالـ id:", targetId);
//       }
//     }
//   });
// });
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".side");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

let links = document.querySelectorAll(".nav-link");
let pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // إزالة الفئات من جميع الروابط
    links.forEach(l => {
      l.classList.remove("active", "text-white");
      l.classList.add("disactive");
    });

    // إضافة الفئات للرابط الحالي
    this.classList.add("active", "text-white");
    this.classList.remove("disactive");

    // إخفاء جميع الصفحات
    pages.forEach(p => p.classList.add("d-none"));

    // الحصول على الـ ID الخاص بالصفحة المستهدفة
    let targetId = this.getAttribute("data-target");
    if (targetId) {
      let targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.classList.remove("d-none");
      } else {
        console.warn("مفيش صفحة بالـ id:", targetId);
      }
    }
  });
});



