const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const setUpConnection = () => {
    mongoose.connect(require('../../config').db, { useNewUrlParser: true });
    console.log("Set up conenction with db");
}

module.exports = {
    setUpConnection
}