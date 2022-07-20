# www-cypress-webpage

<h2>Technologies</h2>  

- JavaScript
- Cypress
- BrowserStack

<h2>Pre-requistes</h2>

1. Node.js  
2. Modern web browsers (Chrome and Firefox)  

<h2>Run Test Locally</h2>

1. Clone the repository.
2. Go to the root folder of the project.
3. run ```npm install```
4. run ```npm run cypress:open```  <---- this will open the cypress runner and you can choose the test to run

<h2>Run Test in browserstack</h2>

1. Clone the repository.
2. Set two environment vars:
``` 
BROWSERSTACK_USERNAME="your_username"
BROWSERSTACK_ACCESS_KEY="your_access_key"
```
3. Go to the root folder of the project.
4. run ```npm run cypress:browserstack``` <---- this will send the project to browserstack and run a few test cases for the Search page


