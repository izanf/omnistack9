const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },

  async show(req, res) {
    const { user } = req.headers;
    
    const userExists = user.length === 24 && await User.findById(user);

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const spots = await Spot.find({ user });

    return res.json(spots);
  },

  async store(req, res) {
    const { company, price, techs } = req.body;
    const { filename: thumbnail } = req.file;
    const { user } = req.headers;

    const userExists = user.length === 24 && await User.findById(user);

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const spot = await Spot.create({
      user,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price,
      thumbnail
    })

    return res.json(spot)
  }
}