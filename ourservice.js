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



    document.querySelectorAll('#navbar li').forEach(item => {
      item.addEventListener('click', function() {
        // Simpan warna background awal
        const originalBackground = this.style.backgroundColor;
        // Ubah background menjadi hitam
        this.style.backgroundColor = "rgb(128, 203, 74)";
        this.style.color = "white";
        this.style.transition = "0.5s";
        // Setelah 2 detik, kembalikan ke warna background awal
        setTimeout(() => {
          this.style.backgroundColor = originalBackground;
        }, 1500);
      });
    });
 