const { default: axios } = require("axios");

const getDataService=  async (req) => {
    const respuesta= await axios.get ("https://meowfacts.herokuapp.com/?lang=esp");

    if (!respuesta.data) return {message: "Curiosidades sobre gatos no encontradas"};
 return {respuesta: respuesta.data};
}

module.exports= getDataService;
