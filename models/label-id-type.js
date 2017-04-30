const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const labelIdType = {
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
};

module.exports = labelIdType;
