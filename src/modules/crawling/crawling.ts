import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

export const getHTML = async (url: string): Promise<string[] | string> => {
  try {
    const arr: Array<string> = [];
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--disable-web-security',
      ],
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const bodyHandle = await page.$('body');
    const html = await page.evaluate((body) => body.innerHTML, bodyHandle);
    const $ = cheerio.load(html);
    const list = $('img');
    list.map((el: number) => arr.push(list[el].attribs.src));
    return arr;
  } catch (err) {
    let message = 'UnKnown Error';
    if (err instanceof Error) message = err.message;
    return message;
  }
};
