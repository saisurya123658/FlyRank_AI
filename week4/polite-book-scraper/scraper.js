const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const BASE_URL = "https://books.toscrape.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function scrapeBooks() {
    try {

        console.log("Checking robots.txt...");

        const robots = await axios.get(BASE_URL + "robots.txt");

        console.log(robots.data);

        await sleep(2000);

        const response = await axios.get(BASE_URL, {
            headers: {
                "User-Agent":
                    "BackendAIEngineeringBot/1.0 (Educational Project)"
            }
        });

        const $ = cheerio.load(response.data);

        const books = [];

        $(".product_pod").each((i, element) => {

            const title = $(element)
                .find("h3 a")
                .attr("title");

            const price = $(element)
                .find(".price_color")
                .text();

            const availability = $(element)
                .find(".availability")
                .text()
                .trim();

            const rating = $(element)
                .find(".star-rating")
                .attr("class")
                .replace("star-rating ", "");

            const link =
                BASE_URL +
                $(element)
                    .find("h3 a")
                    .attr("href");

            books.push({
                title,
                price,
                rating,
                availability,
                link
            });

        });

        fs.writeFileSync(
            "books.json",
            JSON.stringify(books, null, 2)
        );

        console.log(`${books.length} books saved.`);

    } catch (err) {
        console.log(err.message);
    }
}

scrapeBooks();
