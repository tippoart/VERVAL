document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".section2");

  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const validasicard = document.querySelector(".validasi");
  const verifikasicard = document.querySelector(".verifikasicard");

  // Fungsi untuk mengatur transformasi geser secara horizontal
  function handleScroll(imgElement, event) {
    event.preventDefault();

    let currentTransform = window.getComputedStyle(imgElement).transform;
    let matrix = currentTransform.match(/^matrix\((.+)\)$/);
    let x = 0;

    if (matrix) {
      x = parseFloat(matrix[1].split(", ")[4]);
    }

    const maxTranslate = 0;
    const minTranslate = -(imgElement.offsetWidth - section.offsetWidth);

    if (event.deltaY < 0) {
      x += 150;
    } else {
      x -= 150;
    }

    if (x > maxTranslate) {
      x = maxTranslate;
    } else if (x < minTranslate) {
      x = minTranslate;
    }

    imgElement.style.transform = `translateX(${x}px)`;
  }

  // Scroll pada img2
  img2.addEventListener("wheel", (event) => handleScroll(img2, event));
  // Scroll pada validasi
  validasicard.addEventListener("wheel", (event) =>
    handleScroll(validasicard, event)
  );

  // Menangani sentuhan geser pada validasi dan img2
  function handleTouchMove(imgElement, event) {
    event.preventDefault();
    const touch = event.touches[0];
    let currentTransform = window.getComputedStyle(imgElement).transform;
    let matrix = currentTransform.match(/^matrix\((.+)\)$/);
    let x = 0;

    if (matrix) {
      x = parseFloat(matrix[1].split(", ")[4]);
    }

    const maxTranslate = 0;
    const minTranslate = -(imgElement.offsetWidth - section.offsetWidth);
    const deltaY = touch.clientY - imgElement.getBoundingClientRect().top;

    if (deltaY < 0) {
      x += 150;
    } else {
      x -= 150;
    }

    if (x > maxTranslate) {
      x = maxTranslate;
    } else if (x < minTranslate) {
      x = minTranslate;
    }

    imgElement.style.transform = `translateX(${x}px)`;
  }

  // Geser horizontal untuk sentuhan
  img2.addEventListener("touchmove", (event) => handleTouchMove(img2, event));
  validasicard.addEventListener("touchmove", (event) =>
    handleTouchMove(validasicard, event)
  );

  img1.addEventListener("click", function () {
    img1.style.transform = "translateX(-125%)";
    img1.style.transition = "0.7s";
    img2.style.transform = "translateX(5%)";
    img2.style.transition = "0.7s";
    img2.style.opacity = "1";
    validasicard.style.transform = "translateX(5%)";
    validasicard.style.transition = "0.7s";
    validasicard.style.opacity = "1";
  });

  const verifikasi = document.querySelector(".verifikasi");
  const validation = document.querySelector(".validation");
  const training = document.querySelector(".training");
  const text = document.querySelector(".textku");
  const textrol = document.querySelector(".role");

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
      img1.style.transform = "translateX(4%)";
      img1.style.transition = "0.7s";
      img2.style.transform = "translateX(100%)";
      img2.style.transition = "0.7s";
      img2.style.opacity = "1";
      text.innerHTML = "Verification";
      textrol.innerHTML = "Verification";

      verifikasi.style.opacity = "1";

      validasicard.style.display = "none";
      verifikasicard.style.display = "block";

      verifikasi.style.border = "1.3px solid rgb(122, 195, 77)";

      removeSelectedClass();
      verifikasi.classList.add("selected");

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
      img1.style.transform = "translateX(3%)";
      img1.style.transition = "0.7s";
      validasicard.style.transform = "translateX(100%)";
      validasicard.style.transition = "0.7s";
      validasicard.style.opacity = "1";
      text.innerHTML = "Validation";
      textrol.innerHTML = "Validation";

      img2.style.display = "none";

      validation.style.opacity = "1";

      validasicard.style.display = "block";
      verifikasicard.style.display = "none";

      verifikasi.style.border = "1px solid rgba(29, 30, 31, 0.821)";
      verifikasi.style.color = "rgba(122, 133, 143, 0.909)";

      removeSelectedClass();
      validation.classList.add("active");
      validation.classList.add("selected");

      setTimeout(() => {
        validation.classList.remove("selected");
        validation.style.transition = "0.5s";
      }, 1000);
    });
  }

  if (training) {
    training.addEventListener("click", function () {
      training.style.opacity = "1";

      verifikasi.style.border = "1px solid rgba(29, 30, 31, 0.821)";
      verifikasi.style.color = "rgba(122, 133, 143, 0.909)";
      textrol.innerHTML = "Training";

      removeSelectedClass();
      training.classList.add("selected");
      training.classList.add("active");

      setTimeout(() => {
        training.classList.remove("selected");
        training.style.transition = "0.5s";
      }, 1000);
    });
  }
});
