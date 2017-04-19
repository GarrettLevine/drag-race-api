const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const QueenSchema = new Schema({
    name: String
});

module.exports = mongoose.model(`Queen`, QueenSchema);
