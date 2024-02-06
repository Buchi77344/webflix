async function getMovie(){
    const response = await fecth("api")
    const data = await response.json()
    console.log(data)

}

getMovie()