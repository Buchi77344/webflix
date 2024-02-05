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

    return getMovie()
}

console.log(getMovie())
// export default sendMovie()