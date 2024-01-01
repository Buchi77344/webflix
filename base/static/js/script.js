// Navigation script
let hamburger = document.querySelector(".hamburger")
let mobileMenu = document.querySelector(".mobile-menu")
let sideMenuHamburger = document.querySelector(".menu-toggle")
let leftSideBar = document.querySelector(".left-side-bar")

hamburger.addEventListener("click", (e) => {
    console.log("clicked")
    mobileMenu.classList.toggle("open")
    hamburger.classList.toggle("close")
})

sideMenuHamburger.addEventListener("click", (e) => {
    console.log("clicked")
    leftSideBar.classList.toggle("side-open")
})

// Carousel script
let carouselWrappper = document.querySelector(".carousel-wrapper")
let carousel = document.querySelector(".carousel")
let carouselDivs = document.querySelectorAll(".carousel > .img-div")
let scrollBtn = document.querySelectorAll(".slide-btn")
let pagDots = document.querySelectorAll(".dot")
let movieTextEl = document.querySelector(".movie-text")

let imgWidth
let carouselWidth = carousel.clientWidth
let carouselScrollWidth = carousel.scrollWidth
let carouselScrollX = carousel.scrollLeft
let scrollDiff= carouselScrollWidth - carouselWidth
let intervalId
let textArr = ["Dragon warrior", "Kungfu Panda", "Superman vs batman", "Spiderman in the spider verse", "Wonder woman and the wishing stone", "The incredible Hulk", "Venom, let there be carnage"]
movieTextEl.innerHTML = textArr[0]

carouselDivs.forEach((img) => {
    imgWidth = img.clientWidth

})
 

let counter = (carouselScrollX / imgWidth)
pagDots[counter].classList.add("active-dot")

scrollBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.className.includes("next-btn") ? carouselScrollX += imgWidth : carouselScrollX -= imgWidth
        if (carouselScrollX < 0){
            carouselScrollX = 0
        }
        carousel.scrollLeft = Math.ceil(carouselScrollX)
        carouselScrollX >= scrollDiff ? document.querySelector(".next-btn").style.display = "none" : document.querySelector(".next-btn").style.display = "block"
        carouselScrollX == 0 ? document.querySelector(".prev-btn").style.display = "none" : document.querySelector(".prev-btn").style.display = "block"
        activeDots()
        showMovieText()
    })
})

//pagination button handler script

for(let [index, d] of pagDots.entries()){
    d.addEventListener("click", () => {
        slideWithDots(index)
        activeDots()
    })
}

function slideWithDots(index){
    carouselScrollX = Math.ceil((carouselWidth * index))
    carousel.scrollLeft = carouselScrollX
    showMovieText()
    // clearInterval(intervalId)
}


function activeDots(){
    counter = (carouselScrollX / imgWidth)
    pagDots.forEach(dot => {
        dot.classList.remove("active-dot")
    })

    pagDots[counter].classList.add("active-dot")

}



function autoSlide(){
    intervalId = setInterval(() => {
        carouselScrollX = carouselScrollX == 0 ? carouselScrollX += imgWidth : carouselScrollX >= scrollDiff ? 0 : carouselScrollX += imgWidth
        carousel.scrollLeft = carouselScrollX 
        activeDots()
        showMovieText()
    }, 1000)
}

// autoSlide()

function showMovieText(){
    counter = (carouselScrollX / imgWidth)
    movieTextEl.innerHTML = textArr[counter]
    movieTextEl.classList.toggle("movie-text-reveal")
    // textArr.forEach(text => {
    //     movieTextEl.innerHTML = text
    // })
}

function enableAutoSlide(){
    carouselWrappper.addEventListener("mouseenter", () => clearInterval(intervalId))
    carouselWrappper.addEventListener("mouseleave", () => autoSlide())
}

// enableAutoSlide()


let touchStartX
let touchEndX
let touchDistance
let threshold = 50
function touchSlide(){
    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX
        console.log("touchStart!!")
        // console.log(touchStartX)
    })

    carousel.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX
        // console.log(touchEndX)
    })

    carousel.addEventListener("touchend", (e) => {
        touchDistance = touchStartX - touchEndX 
        if(touchDistance > threshold){
            console.log("swiped right")
            carouselScrollX += imgWidth
            carousel.scrollLeft = carouselScrollX
        }

        if(touchDistance < -threshold){
            console.log("swiped left")
            carouselScrollX -= imgWidth
            carousel.scrollLeft = carouselScrollX
        }

        activeDots()
        // console.log(touchDistance)
        
    })
}

touchSlide()
