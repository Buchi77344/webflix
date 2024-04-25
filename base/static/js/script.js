
// import movie from "./syncMovie.js"
// let topic = [];
// console.log(movie)




// console.log(movie)



// Navigation script
let hamburger = document.querySelector(".hamburger")
let mobileMenu = document.querySelector(".mobile-menu")
let sideMenuHamburger = document.querySelector(".menu-toggle")
let moreIcon = document.querySelector(".menu-item a.more")
let leftSideBar = document.querySelector(".left-side-bar")
let mobileLeftSideBar = document.querySelector(".mobile-left-side-bar")

hamburger.addEventListener("click", (e) => {
    console.log("clicked")
    mobileMenu.classList.toggle("open")
    hamburger.classList.toggle("close")
})

sideMenuHamburger.addEventListener("click", (e) => {
    console.log("clicked")
    leftSideBar.classList.toggle("side-open")
})

moreIcon.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("mobile")
    mobileLeftSideBar.classList.toggle("slide-left")
})

// Carousel script
let carouselWrappper = document.querySelector(".carousel-wrapper")
let carousel = document.querySelector(".carousel")
let carouselDivs = document.querySelectorAll(".carousel > .img-div")
let scrollBtn = document.querySelectorAll(".slide-btn")
let pagDots = document.querySelectorAll(".dot")
let movieTextEl = document.querySelector(".movie-text")
let movieDesc = document.querySelector(".description")
let videoContainer = document.querySelector(".video-card-container")

// async function getMovie(){
//     const API_KEY = "84cce1176ec500693be04f9ce60273de"
//     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=84cce1176ec500693be04f9ce60273de`)
//     .then(res => res.json())
//     .then(data => sendMovie(data))
//     .catch(err => console.log(err))

//     // const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${API_KEY}`)
//     // const data = await res.json()
//     // return  data
// }

// function sendMovie(data){
//     console.log(data)
//     let listMel = ''
//     for(let i = 0; i < data.results.length; i++){
//         listMel += `
        
//             <a class = "video-link" href = "/">
//                 <img class = "video-card" src = "" alt = "video image card"/>
//                 <div class = "video-description">
//                     <h3>HD</h3>
    
//                     <div class = "details">
//                         <p>${data.results[i].original_title}</p>
//                         <p>PG-13</p>
//                         <p>${data.results[i].vote_average}</p>
//                     </div>
//                 </div>
//             </a>
//         `
    
//     }
//     videoContainer.innerHTML = listMel
//     console.log(movieDesc)
// }

// getMovie()


async function getMovie(){
    const API_KEY = "84cce1176ec500693be04f9ce60273de"
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=84cce1176ec500693be04f9ce60273de`)
    .then(res => res.json())
    .then(data => sendMovie(data))
    .catch(err => console.log(err))

    // const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${API_KEY}`)
    // const data = await res.json()
    // return  data
}

function sendMovie(data){
    console.log(data)
    let listMel = ''
    for(let i = 0; i < data.results.length; i++){
        listMel += `
        
            <a class = "video-link" href = "/">
                <img class = "video-card" src = "" alt = "video image card"/>
                <div class = "video-description">
                    <h3>HD</h3>
    
                    <div class = "details">
                        <p>${data.results[i].original_title}</p>
                        <p>PG-13</p>
                        <p>${data.results[i].vote_average}</p>
                    </div>
                </div>
            </a>
        `
    
    }
    videoContainer.innerHTML = listMel
    console.log(movieDesc)
}

getMovie()


let imgWidth
let carouselWidth = carousel.clientWidth
let carouselScrollWidth = carousel.scrollWidth
let carouselScrollX = carousel.scrollLeft 
let scrollDiff= carouselScrollWidth - carouselWidth
let intervalId
// let textArr = ["Dragon warrior", "Kungfu Panda", "Superman vs batman", "Spiderman in the spider verse", "Wonder woman and the wishing stone", "The incredible Hulk", "Venom, let there be carnage"]
// movieTextEl.innerHTML = textArr[0]
// if(sendMovie){

//     let listMel = ""
//     function displayLatestMovies(){
    
//         for(let movie of sendMovie.results){
//             listMel += `     
//             <a class = "video-link" href = "/">
//                 <img class = "video-card" src = 'https://image.tmdb.org/t/p/w500${movie.poster_path}' alt = "video image card"/>
//                 <div class = "video-description">
//                     <h3>HD</h3>
//                     <div class = "cta">
//                         <div class = "details">
//                             <p>${movie.original_title}</p>
//                             <p class = "pg-text">PG-13</p>
//                             <p>${movie.vote_average}</p>
//                         </div>
        
//                         <button class = "watch-btn"> click here</button>
        
//                     </div>
//                 </div>
//             </a>
//             `
//         }
    
//         videoContainer.innerHTML = listMel
//     }
    
//     displayLatestMovies()
    
//     let listCel
//     function displayCarousel(){
//         for(let movie of sendMovie.results){
//             listCel += `
//                 <div class = "img-div">
//                     <img src = "https://image.tmdb.org/t/p/w500${movie.poster_path}" alt = "test-image">
//                 </div>
//             `
    
//         }
    
//         carousel.innerHTML = listCel
//     }
    
//     displayCarousel()
// }else{
//     console.log("null")
// }

let counter = 0

pagDots[counter].classList.add("active-dot")
// console.log(pagDots[counter])
// function showMovieText(){
//     fetch("topic")
//         .then(res => res.json())
//         .then(data => {
//             if(data){
//                 movieTextEl.innerHTML = data[counter].name
//                 movieDesc.innerHTML = data[counter].des
//                 // console.log(data[counter])
//             }
//         })
   

    // movieTextEl.classList.add("movie-text-reveal")
//}





    // movieTextEl.classList.add("movie-text-reveal")
//}




//     // movieTextEl.classList.add("movie-text-reveal")
// }

// showMovieText()

scrollBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.className.includes("next-btn") ? nextImage() : prevImage()
        // console.log(carouselScrollX)
        // console.log(counter)

        // showMovieText()
    })
})
let cDiv
function nextImage(){
    carouselDivs[counter].style.animation = "next1 .5s ease forwards"
    if(counter >= carouselDivs.length - 1){
        counter = 0
    }else{
        counter++
    }

    carouselDivs[counter].style.animation = "next2 .5s ease forwards"
    console.log(carouselDivs[counter])
    slideactiveDots(counter)
}

function prevImage(){
    carouselDivs[counter].style.animation = "prev1 .5s ease forwards"
    if(counter <= 0){
        counter = carouselDivs.length - 1
    }else{
        counter--
    }

    carouselDivs[counter].style.animation = "prev2 .5s ease forwards"
    console.log(counter)
    slideactiveDots(counter)

}


//pagination button handler script

for(let [index, d] of pagDots.entries()){
    d.addEventListener("click", () => {
        slideWithDots(index)
        
    })
}

function slideWithDots(index = 0){
    let targetIndex = index

    let direction = targetIndex > counter ? 1 : -1
    console.log(direction)
    if(direction == 1){
            carouselDivs[counter].style.animation = "next1 .5s ease forwards"
            carouselDivs[targetIndex].style.animation = "next2 .5s ease forwards"
    } 

    if(direction == -1){
            carouselDivs[counter].style.animation = "prev1 .5s ease forwards"
            carouselDivs[targetIndex].style.animation = "prev2 .5s ease forwards"
    }

    counter = index
    clickActiveDots(counter)
}


function slideactiveDots(counter){
    pagDots.forEach(dot => {
        dot.classList.remove("active-dot")
    })

    pagDots[counter].classList.add("active-dot")

}

function clickActiveDots(index){

        pagDots.forEach(dot => {
            dot.classList.remove("active-dot")
        })
    
        pagDots[index].classList.add("active-dot")
    
    }


function autoSlide(){
    intervalId = setInterval(() => {

            nextImage()
            slideactiveDots(counter)
//         showMovieText()
    }, 4000)
}

// autoSlide()
let bol = false


function enableAutoSlide(){
    carouselWrappper.addEventListener("mouseenter", () => clearInterval(intervalId))
    carouselWrappper.addEventListener("mouseleave", () => autoSlide())
}

enableAutoSlide()


let touchStartX
let touchEndX
let touchDistance
let threshold = 50
function touchSlide(){
    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX
        clearInterval(intervalId)

        console.log("touchStart!!")
        // console.log(touchStartX)
    })

    carousel.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX
        console.log(touchEndX)
        console.log("touchMove")
        // console.log(touchEndX)
    })

    carousel.addEventListener("touchend", (e) => {
        touchDistance = touchStartX - touchEndX 
        console.log(touchDistance)
        //swipe right
        console.log("touchStart!!")
        if(touchDistance > threshold){
            console.log("swiped right")

            nextImage()
        }

        // swipe left
        if(touchDistance < -threshold){
            console.log("swiped left")
 
            prevImage()
        }

        slideactiveDots(counter)
        // console.log(touchDistance)
        
    })
}

touchSlide()

            // carouselScrollX += imgWidth
            // carousel.scrollLeft = carouselScrollX

           // carouselScrollX -= imgWidth
            // carousel.scrollLeft = carouselScrollX

//         carouselScrollX = carouselScrollX == 0 ? carouselScrollX += imgWidth : carouselScrollX >= scrollDiff ? 0 : carouselScrollX += imgWidth
//         if(carousel.scrollLeft >= 7554){
//             // carouselScrollX = 0
//             // carousel.scrollLeft = 0
//             carousel.style.scrollBehavior = "unset"
//         }else{
//             carousel.style.scrollBehavior = "smooth"

//         }
//         carousel.scrollLeft = carouselScrollX 

 // if (carouselScrollX < 0){
        //     carouselScrollX = 0
        // }

        // if(carouselScrollX == 7554){
        //     // carouselScrollX = 0
        //     carousel.style.scrollBehavior = "unset"
        // }else{
        //     carousel.style.scrollBehavior = "smooth"

        // }
        // carousel.scrollLeft = Math.ceil(carouselScrollX)
        // // carouselScrollX >= scrollDiff ? document.querySelector(".next-btn").style.display = "none" : document.querySelector(".next-btn").style.display = "block"
        // carouselScrollX == 0 ? document.querySelector(".prev-btn").style.display = "none" : document.querySelector(".prev-btn").style.display = "block"
        // console.log(carouselScrollX)
