# 📚 The Polite Scraper

## Overview

This project is an educational web scraper built using **Node.js**, **Axios**, and **Cheerio**.

The scraper collects book information from the practice website **Books to Scrape** while following responsible scraping practices.

---

## Features

- Reads `robots.txt`
- Uses a custom User-Agent
- Implements a 2-second delay between requests
- Extracts:
  - Book Title
  - Price
  - Rating
  - Availability
  - Product URL
- Saves data as `books.json`

---

## Technologies

- Node.js
- Axios
- Cheerio

---

## Installation

```bash
npm install
```

---

## Run the Project

```bash
npm start
```

---

## Output

The scraper generates:

```
books.json
```

containing structured book data.

---

## Example Output

```json
{
  "title": "A Light in the Attic",
  "price": "£51.77",
  "rating": "Three",
  "availability": "In stock",
  "link": "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
}
```

---

## Responsible Scraping

This project follows polite scraping practices:

- Checks `robots.txt`
- Uses a custom User-Agent
- Limits request frequency
- Scrapes only a public practice website

---

## Author

Sai Surya

Backend AI Engineering Assignment
