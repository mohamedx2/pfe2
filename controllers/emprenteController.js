const Empreinte = require('../models/emprente');

exports.createEmpreinte = async (req, res) => {
    try {
        const empreinte = new Empreinte(req.body);
        await empreinte.save();
        res.status(201).send(empreinte);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getEmpreinte = async (req, res) => {
    try {
        const empreinte = await Empreinte.findOne({ id: req.params.id });
        if (!empreinte) return res.status(404).send();
        res.send(empreinte);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateEmpreinte = async (req, res) => {
    try {
        const empreinte = await Empreinte.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!empreinte) return res.status(404).send();
        res.send(empreinte);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteEmpreinte = async (req, res) => {
    try {
        const empreinte = await Empreinte.findOne({ id: req.params.id });
        if (!empreinte) return res.status(404).send();
        await empreinte.deleteOne();
        res.send(empreinte);
    } catch (error) {
        res.status(500).send(error);
    }
};
