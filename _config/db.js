const mongoose = require('mongoose');
const config = require('../config');
const mlabUrl = config.mlab

module.exports = {
    connectTo: function (database = 'sandbox', host = 'localhost') {
        return mongoose.connect(mlabUrl);
    },
};

