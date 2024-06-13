window.addEventListener("scroll", function () {
  let imgContainer = document.querySelector(".img1");
  let img = document.querySelector(".img1 img");
  let containerRect = imgContainer.getBoundingClientRect();
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  let movement = (scrollPosition - containerRect.top) * -0.1;

  img.style.transform = "translateY(" + movement + "px)";
});



let firstClick = true;
let secondClick = true;

function toggleImage() {
  let imgs = document.getElementsByClassName("img");
  let imgCard = document.getElementById("img-container");

  if (firstClick) {
    // Show the images on the first click
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "block";
      imgs[i].style.cursor = "default";
    }
    firstClick = false;
  } else if (secondClick) {
    imgCard.style.position = "relative";
    imgCard.style.right = "2rem";
    secondClick = false;
  }
}
