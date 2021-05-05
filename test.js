const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const stealth = StealthPlugin();
puppeteer.use(stealth);
stealth.enabledEvasions.delete('iframe.contentWindow');

