const express = require('express');
const bodyParser = require('body-parser')
const port = 8080;
const app = express();

app.use(express.static('static'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.status(200).type('html').send(`
        <h1>Hello from Express JS!</h1>
        <button><a href="/Phone">See our phone?</a></button>
    `);
});

app.get('/Phone', (req, res) => {
    res.status(200).type('html').send(`
        <h1>Our contact: +359 897 654 554</h1>
        <button><a href="/">Back</a></button>
    `);
});

app.listen(port, () => {
    console.log(`Express application is listening on port ${port}...`);
});
