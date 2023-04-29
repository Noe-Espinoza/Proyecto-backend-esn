const getDataService = require("../services/apiExternaService");

const getDatosController = async (req, res) => {
    
    const datos=  await getDataService (req);
     res.json ({datos})
 }
 
 module.exports= getDatosController;
 