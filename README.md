# Overview
Use selenium to automate the process of importing MS Word documents as Confluence pages.

# Pre-requisites
* Chrome browser
* Nodejs
* Selenium

This script was test on `Ubuntu 16.04`, `Confluence 6.x`  and `Selenium webdriver 3.5`

# Setup
* Run `npm install`

# Usage
* Update the `infile` file with the absolute paths to the Word documents you need to import
* Update the `config.js` file with the necessary details
    - `url`: Confluence home
    - `import_url`: URL to the "Import Word Document" link of the parent page
    - `import_pate_title`: Title of the parent page
    - `credentials`: credentials to of a user that has access to import word documents.
* Execute te following command in bash
    - `./run.sh infile`

# TODO
* Try using selenium in headless mode and dockerizing the project.
