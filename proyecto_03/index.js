const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
const {BreakingNew}  = require('./models')

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

cron.schedule("* * * * * *", async()=>{
    console.log("Cron Job!!");
    const html = await axios.get("https://cnnespanol.cnn.com/");
    const $ = cheerio.load(html.data);
    const titles = $(".new__title");
    titles.each((index, element) => {
    const breakingNew = {
    title: $(element).text(),
    link: $(element).children().attr("href"),
  };

  BreakingNew.create([breakingNew]);
});
})


