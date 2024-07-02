let isMoved = false;
let isDragging = false;
let startX;
let initialTransform;
let currentTransform = 0;

const gambar1 = document.querySelector(".img1");
const gambar2 = document.querySelector(".img2");
const imgContainer = document.querySelector(".img-container");

gambar1.addEventListener("click", () => {
  if (!isMoved) {
    gambar1.style.transform = "translateX(-100%)";
    gambar2.style.transform = "translateX(-100%)";
  } else {
    gambar1.style.transform = "translateX(0)";
    gambar2.style.transform = "translateX(0)";
  }
  isMoved = !isMoved;
});

gambar2.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  const transformStyle = window.getComputedStyle(gambar2).transform;
  initialTransform =
    transformStyle === "none"
      ? 0
      : parseFloat(transformStyle.split(",")[4].trim());
  gambar2.style.cursor = "grabbing"; /* Mengubah cursor saat dragging */
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  let newTransform = initialTransform + dx;

  // Mendapatkan lebar container dan gambar
  const containerWidth = imgContainer.offsetWidth;
  const imgWidth = gambar2.offsetWidth;

  // Membatasi pergerakan gambar dalam batas container
  const minTransform = 0;
  const maxTransform = containerWidth - imgWidth;

  // Memastikan pergerakan tidak melewati batas
  if (newTransform < minTransform) {
    newTransform = minTransform;
  } else if (newTransform > maxTransform) {
    newTransform = maxTransform;
  }

  gambar2.style.transform = `translateX(${newTransform}px)`;
  currentTransform = newTransform; // Memperbarui posisi transformasi saat ini
}

function onMouseUp() {
  if (isDragging) {
    isDragging = false;
    gambar2.style.cursor = "grab"; /* Mengembalikan cursor ke state awal */
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    initialTransform = currentTransform; // Memperbarui nilai transformasi awal
  }
}
