const express = require('express');
const router = express.Router();
const crud = require('../controller/crud');

//API
router.post('/addOrder', crud.addOrder);
router.put('/replaceOrder/:uuid', crud.replaceOrder);
router.delete('/deleteOrder/:uuid', crud.deleteOrder);
router.get('/getAllOrders', crud.getAllOrders);
router.get('/getOrder/:uuid',  crud.getOrder);

module.exports = router;