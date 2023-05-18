
const checkEspecie= (_, res, next)=> {
    console.log ('Si la mascota es hamster, conejo, cobayo, pez, huron, se clasifica la especie como Pequeñas Mascotas');
    next()
}
        
module.exports= checkEspecie;
