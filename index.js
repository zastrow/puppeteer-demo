import puppeteer from 'puppeteer';

const url = process.argv[2];

const Puppet = async () => {
	const browser = await puppeteer.launch({
		headless: true
	});

	const page = await browser.newPage();
	await page.goto(url);

	const heading = await page.$eval('h1', el => el.innerText);

	console.log(heading);

	await page.close();
	await browser.close();
}

Puppet();
