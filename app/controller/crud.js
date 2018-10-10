const Order = require('../db/models/Order');

exports.addOrder = (req, res) => {
    let body = req.body;

    let order = new Order({
        uuid: body.uuid,
        executorName: body.executorName,
        customerName: body.customerName,
        price: body.price,
        executorPay: body.executorPay,
        dateAdded: body.dateAdded,
        dateFinished: body.dateFinished
    });

    order.save((err, result) => {
        if (err) return console.log(err);

        console.log("Add order: " + result);

        res.send(result);
    });
}

exports.deleteOrder = (req, res) => {
    Order.deleteOne({ uuid: req.params.uuid }, function(err, result){
        if(err) return console.log(err);

        console.log("Delete order: " + result);

        res.send(result);
    });
}

exports.replaceOrder = (req, res) => {
    let body = req.body;

    let order = {
        uuid: body.uuid,
        executorName: body.executorName,
        customerName: body.customerName,
        price: body.price,
        executorPay: body.executorPay,
        dateAdded: body.dateAdded,
        dateFinished: body.dateFinished
    };

    Order.replaceOne({ uuid: req.params.uuid }, order, (err, result) => {
        if (err) return console.log(err);

        console.log("Replace order: " + result);

        res.send(result);
    });
}

exports.getOrder = (req, res) => {
    Order.find({ uuid: req.params.uuid }, (err, result) => {
        if(err) return console.log(err);

        console.log("Get order: " + result);

        res.send(result);
    }) ;
}

exports.getAllOrders = (req, res) => {
    Order.find({}, (err, result) => {
        if(err) return console.log(err);

        console.log("Get all orders: " + result);

        res.send(result);
    });
}