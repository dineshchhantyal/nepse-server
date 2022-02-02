const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();

const app = express();

app.use(cors(
    {
        origin: '*',
    }
));
app.use(morgan('dev'));
app.get("/", async (req, res) => {
    axios.get(process.env.API_URL).then(data => {
        res.send(data.data.live_data);
    }).catch(error => {
        console.log(error);
        res.status(400).send(error);
    });
})

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
}
);

