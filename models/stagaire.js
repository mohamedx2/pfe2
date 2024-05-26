const mongoose = require('mongoose');

const stagiaireSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    cin: { type: String, required: true },
    tel: { type: String, required: true },
    email: { type: String, required: true },
    faculte: { type: String, required: true },
    date_commence: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    role: { type: String, required: true }
});

module.exports = mongoose.model('Stagiaire', stagiaireSchema);
