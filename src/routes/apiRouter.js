const express= require ('express')
const getDatosController= require ("../controller/apiController")
const datosRouter= express.Router()

datosRouter.get ('/gatos' , getDatosController);

module.exports= datosRouter;
