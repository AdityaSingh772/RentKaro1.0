const clientData = require('../models/client');


const getclient = async(req, res) => {
    try {
        const clients = await clientData.find();
        res.status(200).json(clients);
    } catch (error) {
        console.log("error fetching the client info" , error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports={
    getclient,
}