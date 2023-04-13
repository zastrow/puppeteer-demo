import puppeteer from 'puppeteer';

const url = 'https://sparkbox.com/team';

const Puppet = async () => {
	const browser = await puppeteer.launch({
		headless: true
	});

	const page = await browser.newPage();
	await page.goto(url);

	const people = await page.$$('.text-team-name');

	for (let i = 0; i < people.length; i++) {
		let person = await people[i];
		let name = await page.evaluate(el => el.innerText, person);
		console.log(name);
	}

	await page.close();
	await browser.close();
}

Puppet();
