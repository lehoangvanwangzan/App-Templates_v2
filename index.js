const express = require('express');
// require('express-async-errors');
const morgan = require('morgan');
const app = express();
const ip = require('ip');
const port = 3000;
const path = require('path');
const route = require('./routes');
 
const {conn,sql } = require('./connectdb');

app.use(morgan('combined')); //Hiển thị logger HTML
app.set('view engine', 'ejs');
app.use(express.static("node_modules/jquery"));
app.use(express.static("node_modules/print-js"));
app.use(express.static("views"));                          
app.use(express.static("public"));
route(app);


app.listen(port, () => {
    console.log('Server nodejs chạy tại địa chỉ: ' + ip.address() + ':' + port); 
    
})

