<<<<<<< HEAD
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
=======
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
>>>>>>> refs/remotes/origin/main
    // fetch("endpoint", {
    //     method: 'POST',
    //     headers : "Application/json",
    //     body : JSON.stringify(getMovie())
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

<<<<<<< HEAD
//}

const sendMovie = await getMovie()


export default sendMovie
=======
    return getMovie()
}

console.log(getMovie())
// export default sendMovie()
>>>>>>> refs/remotes/origin/main
