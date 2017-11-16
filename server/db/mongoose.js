const mongoose = require('mongoose');


const log = require('../log')(module);
const config = require('../config');
mongoose.connect(config.get('mongoose:uri'), {
    useMongoClient: true
});

const db = mongoose.connection;

db.on('error', function (err) {
	log.error('Connection error:', err.message);
});

db.once('open', function callback () {
	log.info("Connected to DB!");
});

module.exports = mongoose;