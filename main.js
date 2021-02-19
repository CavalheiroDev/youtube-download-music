const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Link da música direto do youtube: ', async (nameMusic) => {

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const browser =  await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto('https://www.snappea.com/pt/')

  await page.type('#searchContent', nameMusic, {delay: 1})
  await page.click('._qserhe', {delay: 3})

  await sleep(5000)

  await page.click('._1lg94e4', {delay: 5})
  
  await sleep(5000)

  await browser.close()

  console.log('Download concluido!')

  rl.close()
})