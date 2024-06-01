const Message = require("../models/contact");

const contactMess = async (req, res) => {
    try {
        const { name, email, message } = req.body;

       
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

       
        const newMessage = await Message.create({
            name,
            email,
            message,
        });

       
        res.status(201).json({ message: "Message sent successfully", data: newMessage });
    } catch (error) {
        console.error("Error creating message:", error);
        res.status(500).json({ error: "An error occurred while sending the message" });
    }
}

module.exports = {
    contactMess,
};
