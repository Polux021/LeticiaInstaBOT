//*Criado por Polux, Fazer o uso e retirar esses creditos é crime*\\

const readlineSync = require('readline-sync');
const await = require('await');
const puppeteer = require('puppeteer');

console.log('Rodando...');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const PluxBROWSER = await puppeteer.launch({ headless: false }); // Se nao quiser que o Navegador abra, Mude para True
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/`);
  await sleep(5000)
  await page.type("._2hvTZ.pexuQ.zyHYP", "email@email.com") // email
  await page.type("[aria-label=Senha]", "Senha") // Senha
  await page.click(".sqdOP.L3NKy.y3zKF")
  await sleep(5000)
  await page.goto(`LINK DA PUB`) // Link da publicação
  await sleep(5000)
  await page.type(".Ypffh", "Comentario") // Comentario
  await sleep(5000)
  await page.click("[type=submit]")
	
  //await browser.close();	
		// Caso queira que o navegador feche após o processo , remova o // da linha acima
})();
