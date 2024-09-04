module.exports = class teacherController{
//cadastro de professor
    static async postTeacher(req,res){
        const{ nome, cargaHoraria} = req.body;
        if(!nome || !cargaHoraria){
            res.status(400).json({message:"Dados invalidos"})
        }
        else{
            res.status(200).json({message:"Informação recebida: Docente cadastrado",nome,cargaHoraria});
        }
    }
    //listar professor
    static async getTeacher(req,res){
        res.status(200).json({nome:"Priscila"});
    }
};