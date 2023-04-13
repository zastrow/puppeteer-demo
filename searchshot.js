import puppeteer from 'puppeteer';
import fs from 'fs';

const url = 'https://duckduckgo.com';
const query = process.argv[2];

if (!fs.existsSync('./screenshot')){
	 fs.mkdirSync('./screenshot');
}

const Puppet = async () => {
	const browser = await puppeteer.launch({
		headless: true
	});

	const page = await browser.newPage();
	await page.goto(url);

	await page.waitForTimeout(1500); // wait for 1.5 second
	await page.keyboard.type(query);
	await page.keyboard.press('Enter');
	await page.waitForTimeout(1500); // wait for 1.5 second

	const results = await page.$$('#links h2 > a');

	for (let i = 0; i < results.length; i++) {
		let result = await results[i];
		let link = await result.evaluate(el => el.href, result);
		let title = await result.evaluate(el => el.innerText, result);

		console.log(`${i + 1}: [${title}](${link})`);
	}

	const resultsLinks = await page.$('#links .nrn-react-div:first-of-type');

	await resultsLinks.screenshot({
		type: "png",
		path: `./screenshot/${query} (Large).png`
	});

	await page.close();

	await browser.close();
}

Puppet();
