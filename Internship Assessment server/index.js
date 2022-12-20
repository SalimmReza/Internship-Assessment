const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.port || 5000;
const app = express();
//middleware
app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
    res.send('Internship Assessment');
})

app.listen(port, () => {
    console.log(`server is running ${port}`);
})