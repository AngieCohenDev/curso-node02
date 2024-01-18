const {Schema, mongoose} = require('mongoose');

const CommentSchema = new Schema({
    comment: {type: String, required: true},
    descripcion: {type: String},
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true
    },
    comments: []
});

CommentSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("comment", CommentSchema);