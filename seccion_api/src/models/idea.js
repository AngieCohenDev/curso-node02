const { mongoose, Schema } = require("mongoose");

const IdeaSchema = new Schema({
  idea: { type: String, required: true },
  descripcion: { type: String },
  upvotes: [{ type: Boolean }],
  downvotes: [{ type: Boolean }],
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
      required: true,
      autopopulate: true,
    },
  ],
});

IdeaSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('idea', IdeaSchema);
