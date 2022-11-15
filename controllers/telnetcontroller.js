const model = require('../modules/telnetmodel');
const xuly =require('../modules/xuly');
const { use } = require('../routes/side');

class telnetController {
  //Get/
  getTelnet(req, res){
    res.render('pages/index_telnet');
}
getreport(req, res){
    res.render('pages/index_optrxsfp');
}

    
};
module.exports = new telnetController();
