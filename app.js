const bottonBtn = document.querySelector(".botton-button"); 
const topBtn = document.querySelector(".top-button"); 
const mainSlide = document.querySelector(".main-slide"); 
const container = document.querySelector(".container"); 
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

bottonBtn.addEventListener("click", () => {
        moveSlide("botton");
    })

topBtn.addEventListener("click", () => {
        moveSlide("top");
    })

function moveSlide(direction) {
    if (direction ==="botton") {
    activeSlideIndex++;
    
    if (activeSlideIndex === slidesCount) {
    activeSlideIndex = 0;
    }
    } else if (direction ==="top") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
    activeSlideIndex = slidesCount - 1;
    }
    }
   
    const height = container.clientHeight;
   
    mainSlide.style.transform =
    `translateY(-${activeSlideIndex * height}px)`;
    }
