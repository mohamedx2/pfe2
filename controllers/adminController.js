const Administrateur = require('../models/administrateur');

exports.createAdmin = async (req, res) => {
    try {
        const admin = new Administrateur(req.body);
        await admin.save();
        res.status(201).send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAdmin = async (req, res) => {
    try {
        const admins = await Administrateur.find({ id: req.params.id });
        if (admins.length === 0) return res.status(404).send();
        res.send(admins[0]);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const admins = await Administrateur.findOneAndUpdate({ id: req.params.id });
        if (admins.length === 0) return res.status(404).send();

        const admin = admins[0];
        Object.assign(admin, req.body);
        await admin.save();
        res.send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteAdmin = async (req, res) => {
    try{
    const admins = await Administrateur.find({ id: req.params.id });
    if (admins.length === 0) return res.status(404).send();

    const admin = admins[0];
    await Administrateur.deleteOne({ id: req.params.id });
    res.send(admin);
} catch (error) {
    res.status(500).send(error);
}
};
