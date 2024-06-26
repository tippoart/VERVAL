
//   document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//     const currentPath = window.location.pathname;

//     navLinks.forEach(link => {
//       if (link.getAttribute("href") === currentPath) {
//         link.classList.add("active");
//       }
//     });
//   });
// document.querySelectorAll(".faq-header").forEach((item) => {
//   item.addEventListener("click", () => {
//     const faqItem = item.parentElement;
//     faqItem.classList.toggle("active");

//     // Tutup semua item lain
//     document.querySelectorAll(".faq-item").forEach((otherItem) => {
//       if (otherItem !== faqItem && otherItem.classList.contains("active")) {
//         otherItem.classList.remove("active");
//       }
//     });

    
//   });
// });

   document.querySelectorAll(".faq-header").forEach((item) => {
     item.addEventListener("click", () => {
       const faqItem = item.parentElement;
       faqItem.classList.toggle("active");

       const icons = item.querySelector(".img1");
       const icons2 = item.querySelector(".img2");

       if (faqItem.classList.contains("active")) {
         icons.style.display = "none";
         icons2.style.display = "inline-block";
       } else {
         icons.style.display = "inline-block";
         icons2.style.display = "none";
       }
     });
   });
