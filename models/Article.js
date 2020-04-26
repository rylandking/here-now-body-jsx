const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    maxlength: [200, 'Title can not be more than 200 characters'],
  },
  body: {
    type: String,
    required: [true, 'Please add a title'],
    maxlength: [
      6000,
      'Article can not be more than 6000 characters. This keeps article read time at 5-min or less.',
    ],
  },
});

module.exports =
  mongoose.models.Article || mongoose.model('Article', ArticleSchema);
