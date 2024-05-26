const mongoose = require('mongoose');

const empreinteSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    emp_hash: { type: String, required: true },
    date_emp: { type: Date, required: true },
    start_block: { type: Date, required: true },
    endblock: { type: Date, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Empreinte', empreinteSchema);
