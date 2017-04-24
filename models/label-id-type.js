const Schema = mongoose.Schema;

const labelIdType = {
    label: {
        type: String,
        required: true,
    },
    id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
};

module.exports = labelIdType;
