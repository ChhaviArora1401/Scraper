const cheerio = require('cheerio');
const request = require('request-promise');

const link = "https://en.wikipedia.org/wiki/Inside_Out_(2015_film)";

async function ImdbScrapper() {
    const response = await request(link);
    let $ = cheerio.load(response);
    let obj = {}
    let title = $('h1[class="firstHeading"]').text();
    let desc = $('#mw-content-text > div.mw-parser-output > p:nth-child(5)').text();
    let img = $('#mw-content-text > div.mw-parser-output > table:nth-child(4) > tbody > tr:nth-child(2) > td > a > img').attr('src');
    let dir = $('#mw-content-text > div.mw-parser-output > table:nth-child(4) > tbody > tr:nth-child(3)').text();
    let plot = $('#mw-content-text > div.mw-parser-output > p:nth-child(21)').text();
    obj = {
        title, desc, img, dir, plot
    };
    console.log(obj)
}

ImdbScrapper();