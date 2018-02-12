const fs = require('fs');
const config = require('./config.js')
const {Builder, By, until} = require('selenium-webdriver');

const url = config.url;
const import_url = config.import_url;
const import_page_title = config.import_page_title;
const credentials = config.credentials;

var previousWindowHandle;
var allWindowHandles; 


fs.readFile('infile', 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}

	files = data.split('\n');
	var i = 0;	
    
	var driver = new Builder()
	    .forBrowser('chrome')
	    .build();

	driver.get(url)
		.then(_ => driver.findElement(By.name('os_username')).sendKeys(credentials.username))
		.then(_ => driver.findElement(By.name('os_password')).sendKeys(credentials.password))
		.then(_ => driver.findElement(By.name('login')).click())
		.then(_ => driver.wait(until.titleIs('Dashboard - Confluence'), 5000))
		.then(_ => driver.get(import_url))
		.then(_ => driver.wait(until.elementLocated(By.name('filename'))))
        	.then(_ => driver.findElement(By.name('filename')).sendKeys(files[i]))
        	.then(_ => driver.findElement(By.id('next')).click())
        	.then(_ => driver.wait(until.elementLocated(By.name('submit'))))
        	.then(_ => driver.findElement(By.name('submit')).click())
		.then(_ => driver.sleep(10000))
	 	.then(_ => driver.quit());
});

