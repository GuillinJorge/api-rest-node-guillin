export default (req, res, next)=>{
    //res.json({'message': "API en mantenimiento"});
    console.log(req.method);
    next();
};