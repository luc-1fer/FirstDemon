const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index')
const json = require('express').json;
const {conn} = require('./DB_connection')

const cors = require("cors");


const corsOptions = {
origin: "*",
credentials: true, // access-control-allow-credentials: true
optionSuccessStatus: 200,
};
server.use(cors(corsOptions));

server.use('/', router)
server.use(json())

conn.sync({force: true}).then(()=>{
    server.listen(PORT, (req, res) => {
    console.log('Server raised in port ' + PORT);
})

});

