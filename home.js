// var firstClick = true;
// var secondClick = true;

// var isToggleImageRunning = false;

// function toggleImage(callback) {
//   console.log("toggleImage dimulai");
//   let imgs = document.getElementsByClassName("img");
//   let imgCard = document.getElementById("img-container");
//   let text = document.getElementsByClassName("we-ofer")

//   if (firstClick) {
//     for (let i = 0; i < imgs.length; i++) {
//       imgs[i].style.display = "block";
//       imgs[i].style.cursor = "default";
//     }

//     for (let i = 0; i < text.length; i++) {
//       text[i].style.opacity = "0";
//       text[i].style.transition = "1s";
//     }
//     firstClick = false;
//     callback();
//   } else if (secondClick) {
//     imgCard.classList.add("centered");
//     secondClick = false;
//     console.log("toggleImage selesai (kedua kali)");
//     callback();
//   }
// }

// const imageContainer = document.getElementById("img-container");
// let currentIndex = 0;
// const imageWidth = document.querySelector(".img").clientWidth + 3;
// const totalImages = document.getElementsByClassName("img").length;

// function isElementInViewportCenter(el) {
//   const rect = el.getBoundingClientRect();
//   const viewportHeight = window.innerHeight;
//   const viewportWidth = window.innerWidth;
//   const elementCenterY = rect.top + rect.height / 2;
//   const elementCenterX = rect.left + rect.width / 2;

//   return (
//     elementCenterY >= viewportHeight / 4 &&
//     elementCenterY <= (3 * viewportHeight) / 4 &&
//     elementCenterX >= viewportWidth / 4 &&
//     elementCenterX <= (3 * viewportWidth) / 4
//   );
// }

// window.addEventListener("wheel", function (e) {
//   if (!isToggleImageRunning) {
//     isToggleImageRunning = true;

//     if (isElementInViewportCenter(imageContainer)) {
//       toggleImage(function () {
//         // Menentukan arah scroll
//         const scrollDirection = Math.sign(e.deltaY);

//         // Menghitung indeks baru berdasarkan arah scroll
//         if (scrollDirection === 1) {
//           // Scroll ke bawah (gambar berikutnya)
//           currentIndex = (currentIndex + 1) % totalImages;
//         } else if (scrollDirection === -1) {
//           // Scroll ke atas (gambar sebelumnya)
//           currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//         }

//         // Scroll ke gambar baru
//         imageContainer.scrollTo({
//           left: currentIndex * imageWidth,
//           behavior: "smooth",
//         });

//         // Mencegah perilaku scroll default
//         e.preventDefault();

//         isToggleImageRunning = false;
//       });
//     } else {
//       isToggleImageRunning = false;
//     }
//   }
// });

// const section = document.getElementById("section2");

// window.addEventListener("scroll", function () {
//   const sectionRect = section.getBoundingClientRect();

//   if (sectionRect.top <= 0 && sectionRect.bottom >= window.innerHeight) {
//     imageContainer.classList.add("fixed");
//   } else {
//     imageContainer.classList.remove("fixed");
//   }
// });

// verval 2

document.addEventListener("DOMContentLoaded", function () {
  let textOfer = document.querySelector(".we-ofer");

  const imgCardSec2 = document.querySelector(".card-container");

  const AllCards = [
    document.querySelector(".my-img1"),
    document.querySelector(".my-img2"),
    document.querySelector(".my-img3"),
  ];

  let scrolling = 0;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionOffsetTop = document.querySelector("#section2").offsetTop;
    const sectionHeight = document.querySelector("#section2").offsetHeight;

    // Menghitung posisi awal dan akhir dari section
    const sectionStart = sectionOffsetTop;
    const sectionEnd = sectionOffsetTop + sectionHeight;

    if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
      if (scrolling === 0) {
        textOfer.style.opacity = 0;
        textOfer.style.transition = "1s";
        textOfer.style.zIndex = "0";

        AllCards[0].style.opacity = "1";
        AllCards[0].style.transition = "1s";
        AllCards[0].style.transform = "translateY(0)";
        AllCards[0].classList.add("smooth-bounce");

        AllCards[1].style.opacity = "1";
        AllCards[1].style.transition = "1s";
        AllCards[1].style.transform = "translateY(0)";

        AllCards[1].classList.add("smooth-bounce");

        AllCards[2].style.opacity = "1";
        AllCards[2].style.transition = "1s";
        AllCards[2].style.transform = "translateY(0)";
        AllCards[2].classList.add("smooth-bounce");

        scrolling = 1;
      } else if (
        scrolling === 1 &&
        scrollPosition > sectionStart + sectionHeight / 6
      ) {
   
        imgCardSec2.classList.add("centered");
        
        scrolling == 2;
      }
      
    } else {
      // textOfer.style.opacity = 1;

      // AllCards[0].style.opacity = "0";
      // AllCards[0].style.transition = "0.2s";
      // AllCards[0].style.transform = "translateY(0)";
      // AllCards[0].classList.remove("smooth-bounce");
      
      // AllCards[1].style.opacity = "0";
      // AllCards[1].style.transition = "0.2s";
      // AllCards[1].style.transform = "translateY(0)";
      // AllCards[1].classList.remove("smooth-bounce");
      
      // AllCards[2].style.opacity = "0";
      // AllCards[2].style.transition = "0.2s";
      // AllCards[2].style.transform = "translateY(0)";
      // AllCards[2].classList.remove("smooth-bounce");
      
      


      // const back = document.querySelector(".centered")
      // back.classList.remove("centered");
     
      scrolling = 0;
    }
  });
});

// verval 3

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".emb");
  const textElement2 = document.querySelector(".emb2");
  const bumiIcon = document.querySelector(".bumi");
  const iconContainer = document.querySelector(".icon");
  const ourValuesSpan = document.querySelector(".our-values");
  const future = document.querySelector(".future");

  const cardContainers = [
    document.querySelector(".verval3-card-img-1"),
    document.querySelector(".verval3-card-img-2"),
    document.querySelector(".verval3-card-img-3"),
    document.querySelector(".verval3-card-img-4"),
    document.querySelector(".verval3-card-img-5"),
  ];

  const spans = textElement.querySelectorAll("span");
  let scrollStage = 0;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionOffsetTop = document.querySelector("#section3").offsetTop;
    const sectionHeight = document.querySelector("#section3").offsetHeight;

    // Menghitung posisi awal dan akhir dari section
    const sectionStart = sectionOffsetTop;
    const sectionEnd = sectionOffsetTop + sectionHeight;

    if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
      if (scrollStage === 0) {
        // Animasi perubahan warna teks saat scroll pertama kali
        textElement2.style.color = "white";
        textElement.style.color = "white";
        bumiIcon.style.transition = "0.5s";
        bumiIcon.style.transform = "translateX(4.8rem)";
        bumiIcon.style.backgroundColor = "#3ABEF9";
        bumiIcon.style.borderRadius = "3.5rem";
        iconContainer.style.backgroundColor = "white";
        spans.forEach((span) => {
          span.style.color = "white";
        });

        scrollStage = 1; // Update tahap scroll
      } else if (
        scrollStage === 1 &&
        scrollPosition > sectionStart + sectionHeight / 10
      ) {
        // Jalankan fungsi scroll kedua kali
        ourValuesSpan.style.color = "rgb(159, 190, 88)";
        ourValuesSpan.style.transition = "color 0.5s";
        future.style.color = "white";
        future.style.transition = "color 0.5s";

        scrollStage = 2; // Update tahap scroll
      } else if (
        scrollStage === 2 &&
        scrollPosition > sectionStart + sectionHeight / 5
      ) {
        // Jalankan fungsi scroll ketiga kali
        textElement.style.opacity = "0";
        textElement.style.transition = "1s";
        iconContainer.style.opacity = "0";
        iconContainer.style.transition = "1s";
        textElement2.style.opacity = "0";
        textElement2.style.transition = "1s";
        bumiIcon.style.opacity = "0";
        bumiIcon.style.transition = "1s";
        ourValuesSpan.style.opacity = "0";
        ourValuesSpan.style.transition = "1s";
        future.style.opacity = "0";
        future.style.transition = "1s";

        cardContainers[0].style.display = "block";

        scrollStage = 3; // Update tahap scroll
      } else if (
        scrollStage === 3 &&
        scrollPosition > sectionStart + sectionHeight / 4
      ) {
        // Jalankan fungsi scroll keempat kali
        cardContainers[1].style.display = "block";
        cardContainers[0].style.transform = ` scale(0.93)`;

        scrollStage = 4; // Update tahap scroll
      } else if (
        scrollStage === 4 &&
        scrollPosition > sectionStart + sectionHeight / 3
      ) {
        // Jalankan fungsi scroll kelima kali
        cardContainers[2].style.display = "block";
        cardContainers[1].style.transform = ` scale(0.94)`;
        cardContainers[0].style.transform = ` scale(0.85)`;

        scrollStage = 5; // Update tahap scroll
      } else if (
        scrollStage === 5 &&
        scrollPosition > sectionStart + sectionHeight / 2.5
      ) {
        // Jalankan fungsi scroll keenam kali
        cardContainers[3].style.display = "block";
        // Turunkan card ketiga
        cardContainers[1].style.transform = ` scale(0.90)`;
        cardContainers[2].style.transform = ` scale(0.96)`;
        cardContainers[0].style.transform = `translateY(85px) scale(0.91)`;

        scrollStage = 6; // Update tahap scroll
      } else if (
        scrollStage === 6 &&
        scrollPosition > sectionStart + sectionHeight / 2
      ) {
        // Jalankan fungsi scroll ketujuh kali
        cardContainers[4].style.display = "block";

        cardContainers[2].style.transform = ` scale(0.90)`;
        cardContainers[3].style.transform = ` scale(0.94)`;
        // Turunkan card keempat
        cardContainers[1].style.transform = `translateY(50px) scale(0.91)`;

        scrollStage = 7; // Update tahap scroll
      }
    } else {
      // Reset warna huruf jika scroll berada di luar area yang ditentukan
      spans.forEach((span) => {
        span.style.color = "rgba(43, 47, 49, 0.915)";
      });
      textElement2.style.color = "rgba(43, 47, 49, 0.915)";
      textElement2.style.opacity = "1";
      textElement.style.color = "rgba(43, 47, 49, 0.915)";
      textElement.style.opacity = "1";
      ourValuesSpan.style.color = "rgba(43, 47, 49, 0.915)";
      ourValuesSpan.style.opacity = "1";
      future.style.color = "rgba(43, 47, 49, 0.915)";
      future.style.opacity = "1";
      iconContainer.style.backgroundColor = "transparent";
      iconContainer.style.opacity = "1";
      bumiIcon.style.transition = "0.5s";
      bumiIcon.style.transform = "translateX(0)";
      bumiIcon.style.backgroundColor = "transparent";
      bumiIcon.style.borderRadius = "3rem";
      bumiIcon.style.opacity = "1";

      textElement.style.display = "block";
      textElement2.style.display = "block";
      bumiIcon.style.display = "block";
      ourValuesSpan.style.display = "block";
      future.style.display = "block";
      cardContainers.forEach((card) => {
        card.style.display = "none";
        card.style.transform = "none"; // Reset posisi dan scale card
      });

      scrollStage = 0; // Reset tahap scroll
    }
  });

  // Set warna huruf awalnya menjadi hitam saat halaman dimuat
  spans.forEach((span) => {
    span.style.color = "rgba(43, 47, 49, 0.915)";
  });
  textElement2.style.color = "rgba(43, 47, 49, 0.915)";
  textElement.style.color = "rgba(43, 47, 49, 0.915)";
  ourValuesSpan.style.color = "rgba(43, 47, 49, 0.915)";
  future.style.color = "rgba(43, 47, 49, 0.915)";
});

//verval 1

let imgContainer = document.querySelector(".img1");
let img = document.querySelector(".img1 img");
function verval1() {
  // Check if imgContainer and img are found
  if (imgContainer && img) {
    let containerRect = imgContainer.getBoundingClientRect();
    let scrollPosition =
      this.window.pageYOffset || document.documentElement.scrollTop;
    let movement = (scrollPosition - containerRect.top) * -0.1;

    img.style.transform = "translateY(" + movement + "px)";
  }
}

//verval 4
let card = document.querySelector(".verval4 .verval4-card");
let carouselIcons = document.querySelectorAll(".verval4 .bx");
let nameCard = document.querySelector(".verval4 .name-card");
let testimoni = document.querySelector(".testimoni");

function verval4() {
  if (card) {
    card.style.backgroundSize = "80rem";
    card.style.opacity = "1"; // Tambahkan ini
  }

  if (nameCard) {
    nameCard.setAttribute("data-aos", "zoom-in");
    nameCard.setAttribute("data-aos-once", "true");
    nameCard.style.opacity = "1";
  }
  if (testimoni) {
    testimoni.setAttribute("data-aos", "zoom-in");
    testimoni.setAttribute("data-aos-once", "true");
    testimoni.style.opacity = "1";
  }

  if (carouselIcons.length > 0) {
    carouselIcons.forEach((icon) => {
      icon.style.opacity = "1";
    });
  }
}
