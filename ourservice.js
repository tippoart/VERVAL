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

    if (event.deltaY < 0) {
      x += 90;
    } else {
      x -= 90;
    }

    img2.style.transform = `translateX(${x}px)`;
  });
});
