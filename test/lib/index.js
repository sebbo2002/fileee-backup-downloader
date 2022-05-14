'use strict';

import puppeteer from 'puppeteer';

describe('General', function () {
    this.timeout(60000);

    it('pupperteer should be able to start', async function () {
        const browser = await puppeteer.launch();
        await browser.newPage();

        await browser.close();
    });
});
