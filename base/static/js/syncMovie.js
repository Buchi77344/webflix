<<<<<<< HEAD
const data = {
    name : "ola",
    age : 10,
    city : "Netherland"
}

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



let movie;
function sendMovie(data){

// const data = {
//     name : "ola",
//     age : 10,
//     city : "Netherland"
// }
let loading
let API_KEY = '876fd9699147c3be6eba1259d63db3b4'
let BASE_URL = 'https://api.themoviedb.org/3'
const getMovie =  async() => {
    try {
        loading = true
        loadingFunc(loading)
        const response = await fetch(`${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
        const data = await response.json()
        return data
    
    } catch (error) {
        console.log(error)
    }finally{
        loading = false
        loadingFunc(loading)
    }

}

function loadingFunc(loading){
    loading == true ? console.log('loading') : console.log("end")
}

//const sendMovieData = () => {

function getMovie(){
    // fetch("api")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    const data = {
        name : "ola",
        age : 10,
        city : "Netherland"
    }
    return data
}

function sendMovie(){

    // fetch("endpoint", {
    //     method: 'POST',
    //     headers : "Application/json",
    //     body : JSON.stringify(getMovie())
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))


    // return getMovie()
    console.log("hi there")
    movie = data
    console.log(movie)
}


getMovie()
// console.log(getMovie())

export default movie
// export default sendMovie()

//}

const sendMovie = await getMovie()


export default sendMovie

    return getMovie()
}

console.log(getMovie())
// export default sendMovie()

