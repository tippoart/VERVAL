let isMoved = false;
let isDragging = false;
let startX;
let initialTransform;

const gambar1 = document.querySelector(".img1");
const gambar2 = document.querySelector(".img2");
const section2 = document.querySelector(".section2-verify");

gambar1.addEventListener('click', () => {
  if (!isMoved) {
    gambar1.style.transform = "translateX(-100%)";
    gambar2.style.transform = "translateX(-100%)";
  } else {
    gambar1.style.transform = "translateX(0)";
    gambar2.style.transform = "translateX(0)";
  }
  isMoved = !isMoved;
});

gambar2.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  initialTransform = parseFloat(gambar2.style.transform.replace('translateX(', '').replace('%)', '')) || 0;
  gambar2.style.cursor = 'grabbing'; /* Mengubah cursor saat dragging */
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  let newTransform = initialTransform + (dx / section2.offsetWidth) * 100;
  
  // Membatasi pergerakan gambar dalam batas lebar layar
  if (newTransform < -100) newTransform = -100;
  if (newTransform > 100) newTransform = 100;
  
  gambar2.style.transform = `translateX(${newTransform}%)`;
}

function onMouseUp() {
  if (isDragging) {
    isDragging = false;
    gambar2.style.cursor = 'grab'; /* Mengembalikan cursor ke state awal */
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}
