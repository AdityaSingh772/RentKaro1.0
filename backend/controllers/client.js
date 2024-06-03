const clientData = require('../models/client');

// Controller function to get client data
const getclient = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const clients = await clientData.find();
      res.status(200).json(clients);
    } catch (error) {
      console.error('Error fetching the client info', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

module.exports = { getclient };
