const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const url = require("url");
const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  ///Helen figure out how to set this up!! Ask Mark or Pat!
  url: { type: url, required: true },
  ///
  synopsis: String,
  
});
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;