const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// This file empties the articles collection and inserts the articles from the site? Maybe?
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactnytlist", {
        useMongoClient: true
    }
);

const articleSeed = [{
        title: "Rick Gates, Trump Campaign Aide, Pleads Guilty in Mueller Inquiry and Will Cooperate",
        date: new Date(Date.now()),
        url: "https://www.nytimes.com/2018/02/23/us/politics/rick-gates-guilty-plea-mueller-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news"

    },
    {
        title: "Defying N.R.A., Florida Lawmakers Back Raising Age Limits on Assault Rifles",
        date: new Date(Date.now()),
        url: "https://www.nytimes.com/2018/02/23/us/florida-gun-control.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news"
        
    },

];




db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });