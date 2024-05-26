const mongoose = require('mongoose');

const historiqueSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    heure_entree: { type: Date, required: true },
    heure_sortie: { type: Date, required: true },
    date_hist: { type: Date, required: true },
    pause: { type: String, required: true },
    total: { type: String, required: true },
    reel: { type: String, required: true }
});

module.exports = mongoose.model('Historique', historiqueSchema);
