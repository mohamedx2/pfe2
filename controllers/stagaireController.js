const Stagiaire = require('../models/stagaire');

exports.createStagiaire = async (req, res) => {
    try {
        const stagiaire = new Stagiaire(req.body);
        await stagiaire.save();
        res.status(201).send(stagiaire);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getStagiaire = async (req, res) => {
    try {
        const stagiaires = await Stagiaire.find({ id: req.params.id });
        if (stagiaires.length === 0) return res.status(404).send();
        res.send(stagiaires[0]);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateStagiaire = async (req, res) => {
    try {
        const stagiaires = await Stagiaire.find({ id: req.params.id });
        if (stagiaires.length === 0) return res.status(404).send();

        const stagiaire = stagiaires[0];
        Object.assign(stagiaire, req.body);
        await stagiaire.save();
        res.send(stagiaire);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteStagiaire = async (req, res) => {
    try {
        const stagiaires = await Stagiaire.find({ id: req.params.id });
        if (stagiaires.length === 0) return res.status(404).send();

        const stagiaire = stagiaires[0];
        await Stagiaire.deleteOne({ id: req.params.id });
        res.send(stagiaire);
    } catch (error) {
        res.status(500).send(error);
    }
};
