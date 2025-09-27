const sidebar = document.querySelector(".side");
const main = document.getElementById("mainpage");
const childrenPage = document.getElementById("children");
const attendance = document.getElementById("attendance");
const messages = document.getElementById("messages");
const invoices = document.getElementById("invoices");
const notifications = document.getElementById("notifications");
const settings = document.getElementById("settings");

let queryss = document.querySelectorAll(".dashbtn");
let bodycontent = document.querySelectorAll(".bodycontent");

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
        else if (
            this.classList.contains("#childrenPage") &&
            this.classList.contains("active", "text-white")
        ) {
            childrenPage.classList.add("active");
        }
        else if (
            this.classList.contains("#attendance") &&
            this.classList.contains("active", "text-white")
        ) {
            attendance.classList.add("active");
        }
        else if (
            this.classList.contains("#messages") &&
            this.classList.contains("active", "text-white")
        ) {
            messages.classList.add("active");
        }
        else if (
            this.classList.contains("#invoices") &&
            this.classList.contains("active", "text-white")
        ) {
            invoices.classList.add("active");
        }
        else if (
            this.classList.contains("#notifications") &&
            this.classList.contains("active", "text-white")
        ) {
            notifications.classList.add("active");
        }
        else if (
            this.classList.contains("#settings") &&
            this.classList.contains("active", "text-white")
        ) {
            settings.classList.add("active");
        }
    });
});

const childrens = [
    { name: "أحمد", grade: "الصف الثالث الثانوي" },
    { name: "محمد", grade: "الصف الثاني الإعدادي" },
    { name: "سارة", grade: "الصف الرابع الابتدائي" }
];
const container = document.getElementById("childrenList");
childrens.forEach(child => {
    const div = document.createElement("div");
    div.className = "feild d-flex align-items-center gap-3 mb-3";
    div.innerHTML = `
        <i class="fa-solid fa-user-graduate fs-4 text-primary"></i>
        <div class="part2-feild flex-fill">
            <p class="mb-1 fw-bold">${child.name}</p>
            <h6 class="text-muted">${child.grade}</h6>
            <div class="mt-2 d-flex gap-2">
                <a href="#" class="btn btn-outline-primary btn-sm">التقارير</a>
                <a href="#" class="btn btn-outline-secondary btn-sm">الحضور</a>
                <a href="#" class="btn btn-outline-success btn-sm">تواصل</a>
            </div>
        </div>
    `;
    container.appendChild(div);
});
// -------------------
const closeBtn = document.querySelector(".X");
const menuBtn = document.querySelector(".menu-btn2");
// إغلاق القائمة
closeBtn.addEventListener("click", () => {
    sidebar.style.display = "none";
    menuBtn.style.display = "block";
});

// فتح القائمة
menuBtn.addEventListener("click", () => {
    sidebar.style.display = "block";
    menuBtn.style.display = "none";
});
// -----------------------
const anchorNav = document.querySelector(".navbar-brand");
// دالة لحفظ الاختيار
function setActive(text) {
    anchorNav.innerText = text;
    localStorage.setItem("activeNav", text); // حفظ في localStorage
}
document.querySelectorAll(".sidebar a").forEach(ele => {
    ele.onclick = function () {
        setActive(ele.innerText);
    }
});
window.onload = function () {
    const saved = localStorage.getItem("activeNav");
    if (saved) {
        anchorNav.innerText = saved;
    }
};
// Tabs Switching in Settings
const tabs = document.querySelectorAll(".settings-tabs button");
const forms = document.querySelectorAll(".settings-form");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // إزالة active من الكل
        tabs.forEach(t => t.classList.remove("active"));
        forms.forEach(f => f.classList.remove("active"));

        // إضافة active على المختار
        tab.classList.add("active");
        forms[index].classList.add("active");
    });
});
// -----------------------
const darkbtn = document.getElementById("darkbtn");
const lightbtn = document.getElementById("lightbtn");
const body = document.body;

// الوضع الافتراضي Light
if (!localStorage.getItem("theme")) {
    body.classList.add("light");
    localStorage.setItem("theme", "light");
} else {
    body.classList.add(localStorage.getItem("theme"));
}

// لما يضغط Dark
darkbtn.onclick = () => {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
};

// لما يضغط Light
lightbtn.onclick = () => {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
};






















