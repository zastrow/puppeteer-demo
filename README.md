# Puppeteer Demo!

I want to share some of the stuff you can do with [Puppeteer](https://pptr.dev), Google’s headless Chrome browsing robot!

To get started, clone this repo!

You’ll need [Node.js installed](https://nodejs.org) on your computer before you get started.

Next, open the project directory in your terminal and run the command `npm install`. This will install all you need, which is just Puppeteer!

There are 5 included demos in this repo. Each has its own command that can be run and will generate a result in the browser. The last two will also create screenshots and place them in a `screenshot` folder in the project directory.

## Webpage H1 Demo

This demo will return the text within the first `<h1>` element found on the supplied URL.

- **Command to run:** `node index.js <ADD WEB URL>`
- Example `node index.js https://example.com`

## Webpage For Loop Scraper Demo

This demo shows how to scrap and return the content of all elements with a specific class. In this case the [Sparkbox Team](https://sparkbox.com/team) page, returning the names of everyone listed on that page.

- **Command to run:** `node team.js`

## Return Search Results

This demo uses DuckDuckGo to search for an indicated search term and returns the top results title and links in the terminal.

- **Command to run:** `node search.js <SEARCH TERM>`
- Example `node search.js "Lord of the Rings"`

## Return Search Results and Screenshot

Like the Return Search Results demo, this performs that same search, but also takes and saves a screenshot of the top hit from the search results, saving it in a `screenshot` folder.

- **Command to run:** `node search.js <SEARCH TERM>`
- Example `node searchshot.js "Lord of the Rings"`

## Return Search Results and Screenshot Desktop and Mobile

Building on the Return Search Results and Screenshot demo, this performs that same search and screenshot, but then runs an additional task to emulate an iPhone and take a mobile screenshot.

- **Command to run:** `node search.js <SEARCH TERM>`
- Example `node mobileshot.js "Lord of the Rings"`
