const UserProduct = require('../Modules/registerSchema') 




const AddUser = async (req, res)=>{
    const {name, email, password}=req.body;
    try {
        const existingUser = await UserProduct.findOne({email})
        if(existingUser){
            return res.status(500).json({message:"Email already in use"})
        }
        const user = new UserProduct({name, email, password});
        await user.save()
        return res.status(201).json({message:"New user added successfully", user})
    } catch (error) {
        return res.status(404).json({message:"Error edding data to User List"})
    }
}

const SignIn = async (req, res)=>{
     const {email, password}=req.body;
    try {
        const user = await UserProduct.findOne({email})
        if(!user || !(await user.comparePassword(password))){
            return res.status(500).json({message:"invalid email or password"})
        }
        return res.status(201).json({message:"Login successfull"})
    } catch (error) {
         return res.status(500).json({message:"Error signing in", error: error.message})
    }
}

const GetAllUsers = async (req, res)=>{
    try {
        const users = await UserProduct.find()
        res.json(users)
    } catch (error) {
        return res.status(500).json({message:"Error Getting Users List", error: error.message})
    }
}

const DeleteUser = async (req, res) =>{
    try {
        const user = await UserProduct.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(500).json({message:"Error in finding User by id"})
        }
        res.json({message:"User Deleted Successfully"})
    } catch (error) {
        return res.status(500).json({message:"Error deleting Users from  List", error: error.message})
    }
}

module.exports = {AddUser, SignIn, GetAllUsers, DeleteUser}