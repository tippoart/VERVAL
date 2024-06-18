// new fullpage("#fullpage", {
//   anchors: [
//     "firstPage",
//     "secondPage",
//     "3rdPage",
//     "4thPage",
//     "5thPage",
//     "6thPage",
//     "7thPage",
//     "8thPage",
//     "9thPage",
//     "10thPage",
//   ],

//   menu: "#menu",
//   lazyLoad: true,

//   credits: { enabled: false },
//   beforeLeave: function (origin, destination, direction) {
//     console.log(`Navigasi dari ${origin.anchor} ke ${destination.anchor}`);

//     if (origin.index == 2 && direction == "down" && !isToggleImageRunning) {
//       isToggleImageRunning = true; // Tandai bahwa toggleImage sedang berjalan

//       toggleImage(function () {
//         // Setelah toggleImage selesai, lanjutkan navigasi setelah sedikit penundaan
//         setTimeout(function () {
//           fullpage_api.moveSectionDown();
//           isToggleImageRunning = false; // Reset status
//           secondClick = true; // Siapkan untuk animasi berikutnya
//         }, 100); // Penundaan 100ms, sesuaikan sesuai kebutuhan
//       });

//       return false; // Mencegah perpindahan section lebih lanjut sebelum toggleImage selesai
//     }
//   },
// });

const pages = new Pageable("#fullpage");

window.addEventListener("wheel", (event) => {
  var that = this;
  const delta = Math.sign(event.deltaY);
  console.info(delta);

  var urlfullpath = window.location.href;
  var getlasturl = urlfullpath.substring(urlfullpath.lastIndexOf("/") + 1);
  console.log(getlasturl);

  //Scroll mau ke bawah
  if (
    (getlasturl == "#page-3" && delta == "1") ||
    (getlasturl == "index.html#page-3" && delta == "1")
  ) {
    // console.log(getlasturl);
    // console.log(delta);
    console.log("Ke Horizontal");
    pages.on("scroll", (data) => {
      pages.orientate("horizontal");
    });
  } else if (
    (getlasturl == "#page-4" && delta == "-1") ||
    (getlasturl == "index.html#page-4" && delta == "-1")
  ) {
    // console.log(getlasturl);
    // console.log(delta);
    console.log("Ke Vertical");
    pages.on("scroll", (data) => {
      pages.orientate("vertical");
    });
  }
});
