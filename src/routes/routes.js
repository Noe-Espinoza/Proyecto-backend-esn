const express = require('express');
const router= express.Router()
const {addProdController, getAllProdController, getProdByIdController, updateProdController, deleteProdController} = require('../controller/prodController');
const {body, validationResult} = require ("express-validator");
const checkEspecie = require('../utils/middleware');


router.post ('/producto', 
body('nombre').isString().withMessage("Nombre debe ser string con al menos 3 caracteres") ,
body('marca').isString().withMessage("Marca debe ser string con al menos 3 caracteres"),
body('peso').isString().withMessage("Peso debe ser string con al menos 3 caracteres").optional(),
body('tamaño').isString().withMessage("Tamaño debe ser string con al menos 3 caracteres").optional(),
body('precio').isNumeric().withMessage("Precio debe ser numero"),
body('categoria').isString().withMessage("Categoria debe ser string con al menos 3 caracteres"),
body('especie').isString().withMessage("Especie debe ser string con al menos 3 caracteres"), 
(req, res, next )=>{
    const errors= validationResult(req)
    if (!errors.isEmpty()){
        return res.status(442).json(errors.array())
    }  next()},
checkEspecie,
addProdController);


router.get ('/producto', getAllProdController);

router.get ('/producto/:id',  getProdByIdController);

router.put ('/producto/:id',
body('nombre').isString().withMessage("Nombre debe ser string con al menos 3 caracteres") ,
body('marca').isString().withMessage("Marca debe ser string con al menos 3 caracteres"),
body('peso').isString().withMessage("Peso debe ser string con al menos 3 caracteres").optional(),
body('tamaño').isString().withMessage("Tamaño debe ser string con al menos 3 caracteres").optional(),
body('precio').isNumeric().withMessage("Precio debe ser numero"),
body('categoria').isString().withMessage("Categoria debe ser string con al menos 3 caracteres"),
body('especie').isString().withMessage("Especie debe ser string con al menos 3 caracteres"), 
(req, res,next )=>{
    const errors= validationResult(req)
    if (!errors.isEmpty()){
        return res.status(442).json(errors.array())
    } next() },
checkEspecie,
updateProdController);

router.delete ('/producto/:id', deleteProdController);


module.exports= router;