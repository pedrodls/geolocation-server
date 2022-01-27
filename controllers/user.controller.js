const {
    User
} = require('../models/models')

exports.all = async (req, res) => {
    await User.findAll({ order: [["createdAt", "DESC"]] }).then(u => res.json(u));
}

exports.one = async (req, res) => {
    await User.findOne({
        where: {
            id: req.params.id
        }
    }).then(u => res.json(u));
}

exports.create = async (req, res) => {

    await User.create(req.body).
    then(u => res.json(u)).
    catch(e => res.json(e));
}