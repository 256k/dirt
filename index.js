const express = require('express');
const {readFile} = require('fs').promises;
const app = express();

app.get('/', async (request,response) => {
response.send(await readFile('./index.html', 'utf8'));
});

app.get('/wow', async (request,response) => {
response.send(await readFile('./wow.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => {console.log("You're in, kid.")});
// test
