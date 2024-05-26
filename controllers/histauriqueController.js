const Historique = require('../models/histaurique');

exports.createHistorique = async (req, res) => {
    try {
        const historique = new Historique(req.body);
        await historique.save();
        res.status(201).send(historique);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getHistorique = async (req, res) => {
    try {
        const historiques = await Historique.find({ id: req.params.id });
        if (historiques.length === 0) return res.status(404).send();
        res.send(historiques[0]);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateHistorique = async (req, res) => {
    try {
        const historiques = await Historique.find({ id: req.params.id });
        if (historiques.length === 0) return res.status(404).send();

        const historique = historiques[0];
        Object.assign(historique, req.body);
        await historique.save();
        res.send(historique);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteHistorique = async (req, res) => {
    try {
        const historiques = await Historique.find({ id: req.params.id });
        if (historiques.length === 0) return res.status(404).send();

        const historique = historiques[0];
        await Historique.deleteOne({ id: req.params.id });
        res.send(historique);
    } catch (error) {
        res.status(500).send(error);
    }
};
