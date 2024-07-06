document.addEventListener("DOMContentLoaded", function () {
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const section = document.querySelector(".section2");

  img1.addEventListener("click", function () {
    section.classList.add("show-img2");
  });

  section.addEventListener("wheel", function (event) {
    event.preventDefault();
    let currentTransform = window.getComputedStyle(img2).transform;
    let matrix = currentTransform.match(/^matrix\((.+)\)$/);
    let x = 0;
    if (matrix) {
      x = parseFloat(matrix[1].split(", ")[4]);
    }

    // Hitung batas maksimum dan minimum
    const maxTranslate = 0; // batas kanan (secara default)
    const minTranslate = -(img2.offsetWidth - section.offsetWidth); // batas kiri

    // Tentukan perubahan posisi berdasarkan event scroll
    if (event.deltaY < 0) {
      x += 150; // scroll ke atas
    } else {
      x -= 150; // scroll ke bawah
    }

    // Batasi pergerakan img2 agar tidak melewati batas section
    if (x > maxTranslate) {
      x = maxTranslate; // jika lebih dari batas kanan, atur ke batas kanan
    } else if (x < minTranslate) {
      x = minTranslate; // jika lebih dari batas kiri, atur ke batas kiri
    }

    img2.style.transform = `translateX(${x}px)`;
  });
});

const g1 = document.querySelector(".g-1");
const g2 = document.querySelector(".g-2");
const g3 = document.querySelector(".g-3");

const verifikasi = document.querySelector(".verifikasi");
const validation = document.querySelector(".validation");
const training = document.querySelector(".training");

const removeSelectedClass = () => {
  document.querySelectorAll("#navbar ul li").forEach((item) => {
    item.classList.remove("selected");
    if (item.classList.contains("verifikasi")) {
      item.classList.add("selected-verifikasi");
    }
  });
  validation.classList.remove("active");
  training.classList.remove("active");
  verifikasi.classList.remove("active");
};

if (verifikasi) {
  verifikasi.addEventListener("click", function () {
    g1.style.opacity = "1";
    g2.style.opacity = "0";
    g3.style.opacity = "0";

    verifikasi.style.border = " 1.3px solid rgb(122, 195, 77)";

    removeSelectedClass();
    verifikasi.classList.add("selected");

    // Remove selected class after a delay (1 second)
    setTimeout(() => {
      verifikasi.classList.remove("selected");
      verifikasi.classList.add("selected-verifikasi");
      verifikasi.style.color = "white";
      verifikasi.style.transition = "0.5s";
    }, 1000);
  });
}

if (validation) {
  validation.addEventListener("click", function () {
    g2.style.opacity = "1";
    g1.style.opacity = "0";
    g3.style.opacity = "0";

    verifikasi.style.border = "1px solid rgba(29, 30, 31, 0.821)";
    verifikasi.style.color = "rgba(122, 133, 143, 0.909)";

    removeSelectedClass();
    validation.classList.add("active");
    validation.classList.add("selected");
    verifikasi.classList.add("selected-verifikasi");

    // Remove selected class after a delay (1 second)
    setTimeout(() => {
      validation.classList.remove("selected");
      validation.style.transition = "0.5s";
    }, 1000);
  });
}

if (training) {
  training.addEventListener("click", function () {
    g3.style.opacity = "1";
    g2.style.opacity = "0";
    g1.style.opacity = "0";

    verifikasi.style.border = "1px solid rgba(29, 30, 31, 0.821)";
    verifikasi.style.color = "rgba(122, 133, 143, 0.909)";

    removeSelectedClass();
    training.classList.add("selected");
    training.classList.add("active");
    verifikasi.classList.add("selected-verifikasi");

    // Remove selected class after a delay (1 second)
    setTimeout(() => {
      training.classList.remove("selected");
      training.style.transition = "0.5s";
    }, 1000);
  });
}
