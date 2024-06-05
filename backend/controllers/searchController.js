const Ad = require('../models/ad');

const search = async (req, res) => {
  const query = req.query.q;
  const college = req.query.college;

  try {
    let results;
    if (query || college) {
      results = await Ad.find({
        $and: [
          query ? {
            $or: [
              { title: { $regex: query, $options: 'i' } },
              { description: { $regex: query, $options: 'i' } },
              { brand: { $regex: query, $options: 'i' } },
              { price: { $regex: query, $options: 'i' } }
            ]
          } : {},
          college ? { college: { $regex: college, $options: 'i' } } : {}
        ]
      });
    } else {
      results = await Ad.find({});
    }

    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  search
};
