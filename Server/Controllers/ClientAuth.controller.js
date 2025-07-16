const ClientAuth = require("../Modules/ClientAuthSchema");


const AddNewUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existingUser = await ClientAuth.findOne({ email })
        if (existingUser) {
            return res.status(500).json({ message: "Email already in use" });
        }
        const clientUser = new ClientAuth({ name, email, password })
        await clientUser.save()
        return res
          .status(201)
          .json({ message: "New user added successfully", clientUser });
    } catch (error) {
        return res
          .status(404)
          .json({ message: "Error edding data to User List", error:error.message });
    }
}

const ClientLoggingIn = async (req, res) => {
    const {email, password}= req.body
    try {
        const user = await ClientAuth.findOne({ email })
        if (!user || !(user.comparePassword((password)))) {
            return res
              .status(500)
              .json({ message: "invalid email or password" });
        }
        return res.status(201).json({ message: "Login successfull" });
    } catch (error) {
        return res
          .status(500)
          .json({ message: "Error signing in", error: error.message });
    }
}


const AllClients = async (req, res) => {
    try {
        const resData = await ClientAuth.find()
        res.json(resData)
    } catch (error) {
        return res
          .status(500)
          .json({ message: "Error Getting Client Users List", error: error.message });
    }
}

module.exports = { AddNewUser, ClientLoggingIn, AllClients };