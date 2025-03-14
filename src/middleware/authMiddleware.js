const verificarAutenticacion = (req,res,next) => {
    if(req.isAuthenticated()){
        return res.status(403).json({message: "Ya estas autenticado"});
    }
    next();
};

export default verificarAutenticacion;