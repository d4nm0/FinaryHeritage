const fs = require('fs');
const puppeteer = require('puppeteer');
const express = require('express');

const app = express();
const PORT = 8081;

app.get('/donnees', async (req, res) => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        // Utilisez les paramètres de la requête pour personnaliser votre URL
        const email = req.query.email;
        const password = req.query.password;
        
        await page.goto('https://app.finary.com/v2/login')
        await page.waitForSelector('input[name=email]');
        await page.type('input[name=email]', email);
        await page.waitForSelector('input[name=password]');
        await page.type('input[name=password]', password);
        await page.keyboard.press('Enter');
        await page.waitForSelector('#__next > div._1azjvrp4._1t9y5ha0 > div > div > main > div > div > section._1azjvrp4._1azjvrp8g._1azjvrp1k._1azjvrp1l._1azjvrp1i > div._1azjvrp4._1azjvrpkg._1azjvrp9o._1azjvrpnm._1azjvrp1k._1azjvrp2c._1azjvrp2d._1azjvrp2i > div > div._1azjvrp4._1azjvrp1k > div._1azjvrp4._1azjvrp1k._1azjvrphg > span._1azjvrpk > span');
        let element = await page.$('#__next > div._1azjvrp4._1t9y5ha0 > div > div > main > div > div > section._1azjvrp4._1azjvrp8g._1azjvrp1k._1azjvrp1l._1azjvrp1i > div._1azjvrp4._1azjvrpkg._1azjvrp9o._1azjvrpnm._1azjvrp1k._1azjvrp2c._1azjvrp2d._1azjvrp2i > div > div._1azjvrp4._1azjvrp1k > div._1azjvrp4._1azjvrp1k._1azjvrphg > span._1azjvrpk > span')
        let value = await page.evaluate(el => el.textContent, element)
        var min=1; 
        var max=100000;  
        var random = Math.floor(Math.random() * (max - min)) + min
        await page.screenshot({ path: 'screenshot'+random+'.png' })
        await browser.close()
        const data = { value };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } catch (error) {
        console.error('Erreur lors de l\'exécution du script :', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur lors de l\'exécution du script.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

