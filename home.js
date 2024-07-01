// verval 2

document.addEventListener("DOMContentLoaded", function() {
  let textOfer = document.querySelector(".we-ofer");
  let textOfer2 = document.querySelector(".we-ofer2");

  const imgCardSec2 = document.querySelector(".card-container");

  const AllCards = [
      document.querySelector(".my-img1"),
      document.querySelector(".my-img2"),
      document.querySelector(".my-img3"),
  ];

  let scrolling = 0;

  window.addEventListener("scroll", function() {
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

              textOfer2.style.opacity = 0;
              textOfer2.style.transition = "1s";
              textOfer2.style.zIndex = "0";

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
          }
          
          
          else if (
              scrolling === 1 &&
              scrollPosition > sectionStart + sectionHeight / 12
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


document.addEventListener('DOMContentLoaded', function() {
  var totalLettersll = '';
  var isScrollAdded = "false";
  let scrollAddS3 = "";
  var sectionSelectedin = "";
  const textElement2 = document.querySelector(".emb2");
  const textElementPartSatu = document.getElementById('sectiontigapart1');
  const textElementPartDua = document.getElementById('sectiontigapart2');
  const textElementPartTiga = document.getElementById('sectiontigapart3');
  const textElementPartEmpat = document.getElementById('sectiontigapart4');
  var element = document.getElementById('section3');
  var elementsectiontiga = document.getElementById('section3');
  const bumiIcon = document.querySelector(".bumi");
  const iconContainer = document.querySelector(".icon");

  const cardContainers = [
    document.querySelector(".verval3-card-img-1"),
    document.querySelector(".verval3-card-img-2"),
    document.querySelector(".verval3-card-img-3"),
    document.querySelector(".verval3-card-img-4"),
    document.querySelector(".verval3-card-img-5"),
  ];

  let currentImageIndex = 0;

  if (textElementPartSatu) {
      const spans = textElementPartSatu.querySelectorAll('span');
      const spansdua = textElementPartDua.querySelectorAll('span');
      const spansketiga = textElementPartTiga.querySelectorAll('span');
      const spanskeempat = textElementPartEmpat.querySelectorAll('span');
      const ourValuesSpan = document.querySelector(".our-values");

      window.addEventListener('scroll', function() {
          function getTotalHeight() {
              return document.body.scrollHeight;
          }
          function getViewportHeight() {
              return window.innerHeight;
          }
          function getScrollHeightPerStep() {
              return getViewportHeight();
          }
          function displayScrollInfo() {
              const totalHeight = getTotalHeight();
              const viewportHeight = getViewportHeight();
              const scrollHeightPerStep = getScrollHeightPerStep();
              scrollAddS3 = (Number(totalLettersll) - 40) * Number(scrollHeightPerStep);
          }

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      sectionSelectedin = entry.target.id;
                  }
              });
          }, {
              threshold: 0.1
          });
          document.querySelectorAll('section').forEach(section => {
              observer.observe(section);
          });

          const scrollPosition = window.scrollY;
          var height = element.offsetHeight;
          var offsettop = element.offsetTop;
          var scrollHeightsection = element.scrollHeight;
          const windowHeights = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollPercentage = ((scrollPosition - offsettop) / windowHeights) * 100;
          totallll = spans.length+spansdua.length+spansketiga.length+spanskeempat.length;
          totalLettersll = totallll;
          totalLetters = spans.length;
          totalLettersDua = spansdua.length;
          totalLettersTiga = spansketiga.length;
          totalLettersEmpat = spanskeempat.length;
          const lettersToColor = Math.floor(scrollPercentage * totalLetters / totallll);
          const lettersToColorDua = Math.floor((lettersToColor + totalLettersDua / totallll));
          const lettersToColorTiga = Math.floor((lettersToColorDua + totalLettersTiga / totallll));
          const lettersToColorEmpat = Math.floor((lettersToColorTiga + totalLettersEmpat / totallll));
          spans.forEach((span, index) => {
            console.log("====span pertama====");
                console.log(lettersToColor);
                console.log("========");
              if (index < lettersToColor) {
                  span.style.color = 'white';
              } else {
                  span.style.color = 'rgba(43, 47, 49, 0.915)';
              }
          });

          if (lettersToColor >= totalLetters) {
              bumiIcon.style.transition = "0.5s";
              bumiIcon.style.transform = "translateX(4.8rem)";
              bumiIcon.style.backgroundColor = "rgb(58, 190, 249)";
              bumiIcon.style.borderRadius = "3.5rem";
              iconContainer.style.backgroundColor = "white";

              spansdua.forEach((spandua, indexdua) => {
                console.log("==========TEST Kedua==========");
                console.log(lettersToColor);
                console.log(lettersToColorDua);
                console.log("=======================");
                if (indexdua < lettersToColorDua-totalLetters) {
                  spandua.style.color = 'white';
                } else {
                  spandua.style.color = 'rgba(43, 47, 49, 0.915)';
                }
              });              
          } else{
            spansdua.forEach((spandua, indexdua) => {
              if (lettersToColor < totalLetters) {
                spandua.style.color = 'rgba(43, 47, 49, 0.915)';
                bumiIcon.style.transition = "all 0.5s ease 0s";
                bumiIcon.style.transform = "translateX(0px)";
                bumiIcon.style.backgroundColor = "transparent";
                bumiIcon.style.borderRadius = "3rem";
                iconContainer.style.backgroundColor = "transparent";
              }
            });
          } 
          
          
          if(lettersToColorDua >= totalLettersDua){
            spansketiga.forEach((spanketiga, indexketiga) => {
              console.log("==========TEST Ketiga==========");
                console.log(lettersToColor);
                console.log(lettersToColorDua);
                console.log(lettersToColorTiga);
                console.log("=======================");
              if (indexketiga < lettersToColorTiga-totalLetters-totalLettersDua) {
                spanketiga.style.color = 'white';
              } else {
                spanketiga.style.color = 'rgba(43, 47, 49, 0.915)';
              }
            });
          }else {
              spansketiga.forEach((spanketiga, index) => {
                if (index < lettersToColorTiga) {
                  spanketiga.style.color = 'rgba(43, 47, 49, 0.915)';
                }
              });
          }

          if(lettersToColorTiga >= totalLettersTiga){
            spanskeempat.forEach((spanempat, indexkeempat) => {
              console.log("==========TEST Ketiga==========");
                console.log(lettersToColor);
                console.log(lettersToColorDua);
                console.log(lettersToColorTiga);
                console.log(lettersToColorEmpat);
                console.log("=======================");
              if (indexkeempat < lettersToColorEmpat-totalLetters-totalLettersDua-totalLettersTiga) {
                document.getElementById('sectiontigapart4').style.transition = "color 0.5s";
                document.getElementById('sectiontigapart4').style.coloopacityr = "1";
                document.getElementById('sectiontigapart4').style.display = "block";
                spanempat.style.color = 'rgb(159, 190, 88)';
              } else {
                spanempat.style.color = 'rgba(43, 47, 49, 0.915)';
              }
            });
          }else {
              spansketiga.forEach((spanempat, index) => {
                if (index < lettersToColorEmpat) {
                  spanempat.style.color = 'rgba(43, 47, 49, 0.915)';
                }
              });
          }

          if(lettersToColorEmpat == 51){
            cardContainers[0].style.display = "block";
            cardContainers[1].style.display = "none";
            document.getElementById('sectiontigadiv').style.visibility = "hidden";
          } else if(lettersToColorEmpat < 51){
            document.getElementById('sectiontigadiv').style.visibility = "visible";
            cardContainers[0].style.display = "none";
            cardContainers[1].style.display = "none";
            cardContainers[2].style.display = "none";
            cardContainers[3].style.display = "none";
            cardContainers[4].style.display = "none";
          }

          if(lettersToColorEmpat == 52){
            cardContainers[0].style.display = ` scale(0.93)`;
            cardContainers[1].style.display = "block";
            cardContainers[2].style.display = "none";
            cardContainers[3].style.display = "none";
            cardContainers[4].style.display = "none";
          } 

          if(lettersToColorEmpat == 53){
            cardContainers[3].style.display = "none";
            cardContainers[4].style.display = "none";
            cardContainers[2].style.display = "block";
            cardContainers[1].style.transform = ` scale(0.94)`;
            cardContainers[0].style.transform = ` scale(0.85)`;
          } 

          if(lettersToColorEmpat == 54){
            cardContainers[4].style.display = "none";
            cardContainers[3].style.display = "block";
        cardContainers[1].style.transform = ` scale(0.90)`;
        cardContainers[2].style.transform = ` scale(0.96)`;
        cardContainers[0].style.transform = `translateY(85px) scale(0.91)`;
          } 

          if(lettersToColorEmpat == 55){
        cardContainers[4].style.display = "block";
        cardContainers[2].style.transform = ` scale(0.90)`;
        cardContainers[3].style.transform = ` scale(0.94)`;
        cardContainers[1].style.transform = `translateY(50px) scale(0.91)`;
          } 

          if(lettersToColorEmpat == 56){
        cardContainers[4].style.display = "block";
        cardContainers[2].style.transform = ` scale(0.90)`;
        cardContainers[3].style.transform = ` scale(0.94)`;
        cardContainers[1].style.transform = `translateY(50px) scale(0.91)`;
          } 

          if (isScrollAdded == "false" && sectionSelectedin == "section3") {
              console.log("Hore");
              displayScrollInfo();
              isScrollAdded = "true";
              document.getElementById('section3').style.height = `${scrollAddS3}px`;
          }



      });
  }
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
      card.style.opacity = "1";
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