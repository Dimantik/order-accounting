const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderScheme = new Schema({
    uuid: String,
    executorName: String,
    customerName: String,
    price: { type: Number },
    executorPay: { type: Number },
    dateAdded: { type: Date, default: Date.now },
    dateFinished: { type: Date }
});

module.exports = orderScheme;
