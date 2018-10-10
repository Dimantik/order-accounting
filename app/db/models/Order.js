const mongoose = require('mongoose');
const orderScheme = require('../schemes/OrderScheme');

const Order = mongoose.model("Order", orderScheme);

module.exports = Order;
