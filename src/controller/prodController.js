const {addProdService,getAllProdService, getProdByIdService,updateProdService, deleteProdService } = require("../services/prodServices");

const addProdController=async (req, res) => {
    const addProduct= await addProdService (req);
    res.json (addProduct);
}

const getAllProdController = async(req, res)=> {
    const allProds= await getAllProdService ();
    res.json (allProds)
}

const getProdByIdController = async(req, res)=> {
    const product= await getProdByIdService (req);
    res.json (product)
}

const updateProdController=async (req, res) => {
    const updateProduct= await updateProdService (req);
    res.json (updateProduct);
}

const deleteProdController =async (req, res) => {
    const deleteProduct= await deleteProdService (req);
    res.json (deleteProduct);
}

module.exports= {addProdController, getAllProdController, getProdByIdController, updateProdController, deleteProdController};