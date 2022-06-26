const { Registration } = require ('../models/register.model')

const getAllRegitrations = async(req, res, next) => {
    try{ 
        const register = await Registration.findAll()
    
        res.status(200).json({ register })
    }catch(err){}
};

const getRegistrationById = async(req, res, next) => {
    try{
        const { id } = req.params
        const register = await Registration.fondOne({ where: { id }});

        if(!register ){
        return res.status(404).json({

            status:'error',
            message: 'registrantion not found'
        });
    }
        res.status(200).json( {register} )
    }catch(err){}
}; 

const createRegistration = async(req, res, next) => {
    try{
    const {entranceTime } = req.body;
    
    const newRegister = await Registration.create({ entranceTime });

    res.status(201).json({
        newRegister
    }) 
    }catch(err){}
};

const updateRegistration = async(req, res, next) => {
    try{

        const { id } = req.params
        const { exitTime } = req.body

        const register = await Registration.finOne({where: { id }});
        if (!register){
            return res.status(404).json({
                status:'error',
                message: 'Registration not found'
            });
        }
        await register.update({exitTime, status: 'out'})
        res.status(204).json({status: 'succes'})
    }catch(err){}
};

const cancelRegistration = async(req, res, next) => {
        
    try{
        const { id } = req.params    
            const register = await Registration.finOne({where: { id }});
        if (!register){
            return res.status(404).json({
                status:'error',
                message: 'Registration not found'
            });
        }
        await register.update({ status: 'cancelled'})
    res.status(204).json({status: 'succes'})
    }catch(err){}
}

   

module.exports = {
    getAllRegitrations, 
    getRegistrationById, 
    createRegistration, 
    updateRegistration,
    cancelRegistration}