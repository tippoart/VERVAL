// // new fullpage("#fullpage", {
// //   anchors: [
// //     "firstPage",
// //     "secondPage",
// //     "3rdPage",
// //     "4thPage",
// //     "5thPage",
// //     "6thPage",
// //     "7thPage",
// //     "8thPage",
// //     "9thPage",
// //     "10thPage",
// //   ],

// //   menu: "#menu",
// //   lazyLoad: true,

// //   credits: { enabled: false },
// //   beforeLeave: function (origin, destination, direction) {
// //     console.log(`Navigasi dari ${origin.anchor} ke ${destination.anchor}`);

// //     if (origin.index == 2 && direction == "down" && !isToggleImageRunning) {
// //       isToggleImageRunning = true; // Tandai bahwa toggleImage sedang berjalan

// //       toggleImage(function () {
// //         // Setelah toggleImage selesai, lanjutkan navigasi setelah sedikit penundaan
// //         setTimeout(function () {
// //           fullpage_api.moveSectionDown();
// //           isToggleImageRunning = false; // Reset status
// //           secondClick = true; // Siapkan untuk animasi berikutnya
// //         }, 100); // Penundaan 100ms, sesuaikan sesuai kebutuhan
// //       });

// //       return false; // Mencegah perpindahan section lebih lanjut sebelum toggleImage selesai
// //     }
// //   },
// // });

// const pages = new Pageable("#fullpage");

// window.addEventListener("wheel", (event) => {
//   var that = this;
//   const delta = Math.sign(event.deltaY);
//   console.info(delta);

//   var urlfullpath = window.location.href;
//   var getlasturl = urlfullpath.substring(urlfullpath.lastIndexOf("/") + 1);
//   console.log(getlasturl);

//   //Scroll mau ke bawah
//   if (
//     (getlasturl == "#page-3" && delta == "1") ||
//     (getlasturl == "index.html#page-3" && delta == "1")
//   ) {
//     // console.log(getlasturl);
//     // console.log(delta);
//     console.log("Ke Horizontal");
//     pages.on("scroll", (data) => {
//       pages.orientate("horizontal");
//     });
//   } else if (
//     (getlasturl == "#page-4" && delta == "-1") ||
//     (getlasturl == "index.html#page-4" && delta == "-1")
//   ) {
//     // console.log(getlasturl);
//     // console.log(delta);
//     console.log("Ke Vertical");
//     pages.on("scroll", (data) => {
//       pages.orientate("vertical");
//     });
//   }
// });



// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#text", {
//   backgroundPosition: "0% 0",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#text",
//     start: "top 10%",
//     end: "top 20%",
//     scrub: 1,
//   },
// });
// gsap.to("#text-2", {
//   backgroundPosition: "0% 0",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#text",
//     start: "top 10%",
//     end: "top 10%",
//     scrub: 1,
//   },
// });
// // Menambahkan animasi untuk mengubah display dan memperlihatkan elemen
// gsap.to("#our", {
//   backgroundPosition: "0% 0",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#text",
//     start: "top 10%",
//     end: "top 10%",
//     scrub: 1,
//   },
// });

// gsap.set("#card-verval3", { opacity: 0, y: 50, display: "none" });

// // Tambahkan log untuk memastikan elemen ditemukan
// const bumikuElement = document.querySelector("#bumiku");
// console.log("Elemen #bumiku:", bumikuElement);

// gsap.to("#bumiku", {
//   backgroundSize: "200% 100%",
//   backgroundPosition: "0% 0",
//   ease: "none",
//   duration: 0.1,
//   scrollTrigger: {
//     trigger: "#bumiku",
//     start: "top 20%",
//     end: "top 50%",
//     scrub: 1,
//   },
// });

// gsap.to("#icons-bumi", {
//   x: 45,
//   backgroundSize: "200% 100%",
//   backgroundPosition: "0% 0",
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: "#icons-bumi",
//     start: "top 20%",
//     end: "top 50%",
//     scrub: 1,
//   },
// });

// window.addEventListener("scroll", function () {
//   const ourElement = document.getElementById("ourElement");

//   const section3 = document.getElementById("section3");
//   const section3Top = section3.offsetTop;
//   const section3Height = section3.offsetHeight;
//   const scrollPosition = window.scrollY;

//   if (
//     scrollPosition > section3Top &&
//     scrollPosition < section3Top + section3Height
//   ) {
//     gsap.to(ourElement, {
//       position: "fixed",
//       top: "1rem",
//       overwrite: "all",
//       zIndex: 100,
//       padding: "4rem",
//     });
//   } else {
//     gsap.to(ourElement, {
//       position: "relative",
//       top: "1rem",
//       overwrite: "all",
//     });
//   }

//   if (scrollPosition == section3Height) {
//     gsap.to(ourElement, {
//       opacity: 0,
//     });
//   }
// });