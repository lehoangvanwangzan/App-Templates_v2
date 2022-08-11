const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
//app.use(morgan('combined')); //Hiển thị logger HTML
const path = require('path');
const route = require('./routes');
 
const {conn,sql } = require('./connectdb');

app.set('view engine', 'ejs');
app.use(express.static("node_modules/jquery"));
app.use(express.static("views"));                           // Dùng để lưu trữ webapp
app.use(express.static("public"));




/*app.get('/',function(req, res){
	res.render('pages/index'); //Phương thức này được sử dụng để render một view và gửi chuỗi HTML đã được render tới Client.
});*/

//Route init 
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    
})

