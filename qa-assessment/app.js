const express = require('express');
const bodyParser = require('body-parser');

const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send(`Welcome to the Woebot QA Engineer REST API!`);
});
app.post('/comparison', (req, res) => {
    if (req.body.param1 === undefined) {
        res.status(400).send(`param1 is missing`);
        return;
    }
    if (req.body.param2 === undefined) {
        res.status(400).send(`param2 is missing`);
        return;
    }
    const { param1, param2 } = req.body;
    if (param1 > param2) {``
        res.status(200).send(`param1 (${param1}) is greater than param2 (${param2})`);
    } else if (param1 === param2) {
        res.status(200).send(`param1 (${param1}) is equal to param2 (${param2})`);
    } else if (param1 < param2) {
        res.status(200).send(`param1 (${param1}) is less than param2 (${param2})`);
    }
});
app.get('*', (req, res) => {
    res.status(404).send(`Sorry. We couldn't find that route.`);
});

const server=app.listen(port, () => console.log(`[Woebot QA Engineer REST API]\nListening at http://localhost:${port}\n`));
module.exports=server;