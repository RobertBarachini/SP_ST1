var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var postBodyShema = new mongoose.Schema({
  bodyType: {type: String, required: true},
  content: {type: String, required: true}
});

var postCommentShema = new mongoose.Schema({
  owner: {type: ObjectId, required: true},
  content: {type: String, required: true}
});

var postShema = new mongoose.Schema({
  title: {type: String, required: true},
  owner: {type: ObjectId, required: true},
  body: {type: postBodyShema, required: true},
  description: {type: String, required: true},
  hashtags: [String],
  likes: {type: Number, "default": 0},
  dislikes: {type: Number, "default": 0},
  comments: [postCommentShema]
});

mongoose.model("Post", postShema, "Posts");