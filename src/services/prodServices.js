const ProductModel= require ("../models/product.models")

const addProdService= async (req) => {
    try {
    const producto= req.body;
    const newProduct= new ProductModel(producto);
    await newProduct.save() 
    return {message: "Producto agregado con exito", statusCode: 201};
    } catch (error) {
        return {message: "Ocurrio un error", statusCode:400 }
    }
};

const getAllProdService = async() =>{
   const allProds= await ProductModel.find();
   return allProds
} 

const getProdByIdService= async(req)=> {
    const {id}= req.params;
    const prodById= await ProductModel.findById(id)
    if (!prodById) {
        return {statusCode:404, message:"Producto no encontrado"}
    }
    return prodById;
}

const updateProdService=async (req) =>  {
    try {
    const {id}= req.params; 
    const updateProducto= req.body;
    const prodDB= await ProductModel.findById(id);
    if (!prodDB) {
        return {statusCode: 404, message: "Producto no encontrado"}
    }
    prodDB.nombre= updateProducto.nombre
    prodDB.marca= updateProducto.marca
    prodDB.peso= updateProducto.peso ? updateProducto.peso : prodDB.peso
    prodDB.tamaño= updateProducto.tamaño ? updateProducto.tamaño : prodDB.tamaño
    prodDB.precio= updateProducto.precio
    prodDB.categoria= updateProducto.categoria
    prodDB.especie= updateProducto.especie
    await prodDB.save();
    return {message: "Producto actualizado"}    

    } catch (error) {
        console.log (error);
        return {message: "Ocurrio un error"}
    }
}

const deleteProdService = async(req)=> {
    try {
    const {id}= req.params;
    const deleteProd= await ProductModel.deleteOne({_id: id})
    if (deleteProd.deletedCount === 0) {
        return {statusCode:404, message:"Producto no encontrado"}
    }
    return deleteProd;        
    } catch (error) {
        console.log (error)
        return error;
    }

}

module.exports= {addProdService, getAllProdService, getProdByIdService, updateProdService, deleteProdService};