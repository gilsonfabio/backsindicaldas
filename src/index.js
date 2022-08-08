const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');
require('dotenv/config');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.DATABASE_URL;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.info(`Server running`);
});