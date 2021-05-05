![logo](https://github.com/victorratts13/puppeteer-get-iframe/blob/main/asset/img/get-iframe.png?raw=true)
<div align="center">

![version](https://img.shields.io/badge/version-1.0-brightgreen) ![env](https://img.shields.io/badge/env-npm-red) ![language](https://img.shields.io/badge/lang-javascript-yellow)

A simple library for obtaining iframe with puppeteer
</div>



# install

>- NOTE: for use this project, you need last version on puppeteer.

install this project with npm:

```bash
~# npm install puppeteer-get-iframe --save
```

now, import this on your project

```js
const puppeteer = require('puppeteer')
const iframe = require('puppeteer-get-iframe').iframeAttached;

```

# how to use

for get iframe from your project, you need pass ``page`` param and a name or id of ``iframe`` you want to get.

```js
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  var frame = await iframe(page, 'IFRAME_ID_OR_NAME');
  console.log(frame)

  await browser.close();
})();

```