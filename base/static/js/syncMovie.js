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