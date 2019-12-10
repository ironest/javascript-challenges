axios = require("axios");

api_url = "https://pokeapi.co/api/v2/pokemon/"
res_name = "growlithe";

axios(`${api_url}${res_name}`)
    .then(res => getMoves(res))

const getMoves = (response) => {

    moves = [];

    for (let element of response.data.moves){
        moves.push(element.move.name);
    }

    console.log(moves);

}