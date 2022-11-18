
const model = require('../modules/Sidemodel');
const xuly =require('../modules/xuly');
const { use } = require('../routes/side');
class SileController {
  //Get/
  index(req, res, next) {

    res.render('pages/index_khaibaothuebao');
    next();
  }

  search(req, res) {

    res.send('Tim kiem');
  }

  getInfoOLT(req, res) {
    var ip = req.params.ip;
   
    model.getInfoOLT(ip, function (err, data) {
      if (!err) {
        res.send(data);
       
      }
      else {
        res.send({ result: "loi" });
       // console.log('loi');
      }

    });
  }

  getmacOLT(req, res) {
    var data_mac_olt ='';
      
    //var ip = req.params.ip;
    var slid_ip = req.params.slid_ip;

    var chuoiid = slid_ip.substr(0, 9);
    var ip = slid_ip.substr(10, 12);
    var card = xuly.getCard(chuoiid);
    var pon = xuly.getPon(chuoiid);
    var id = xuly.getID(chuoiid);
     let { PythonShell } = require('python-shell');
       let option = {
         mode: "text",
         pythonOptions: ['-u'],
         args: [ip, 'show vlan bridge-port-fdb 1/1/'+card+'/'+pon+'/'+id+'/14/1']
        };
     
       //chay ham Python lay du lieu  
       PythonShell.run('./controllers/TelnetOLT.py', option,    function(err, results) {
         if (err) throw err;
         results.forEach( function(data2) {
             if (data2 == 'r/'){
                 res.write('\n')
             }else{
                
              //   console.log('in lan 1'+data2);
                  data_mac_olt = data_mac_olt+ data2 +'\n';
            
             }
         });

          res.send(data_mac_olt);
          console.log("da hoan thanh lay mac olt IP: "+ ip);
         res.end();
        
       });

       console.log('Dang lay mac olt')
  
  }

  //lay info OLT ALU 
  getInfoOnuOLT(req, res) {
    var data_mac_olt ='';
      
    //var ip = req.params.ip;
    var slid_ip = req.params.slid_ip;

    var chuoiid = slid_ip.substr(0, 9);
    var ip = slid_ip.substr(10, 12);
    var card = xuly.getCard(chuoiid);
    var pon = xuly.getPon(chuoiid);
    var id = xuly.getID(chuoiid);
     let { PythonShell } = require('python-shell');
       let option = {
         mode: "text",
         pythonOptions: ['-u'],
         args: [ip, 'info configure equipment ont interface 1/1/'+card+'/'+pon+'/'+id]
        };
     
       //chay ham Python lay du lieu  
       PythonShell.run('./controllers/TelnetOLT.py', option,    function(err, results) {
         if (err) throw err;
         results.forEach( function(data2) {
             if (data2 == 'r/'){
                 res.write('\n')
             }else{
                
              //   console.log('in lan 1'+data2);
                  data_mac_olt = data_mac_olt+ data2 +'\n';
            
             }
         });

          res.send(data_mac_olt)
          console.log("da hoan thanh lay info Onu olt IP: "+ ip);
         res.end();
        
       });

       console.log('Dang lay mac olt')
       

  }

  clearMacONU (req,res) {
    var mac = req.params.mac;
    var ouput_ssh ='';
    let { PythonShell } = require('python-shell');
       let option = {
         mode: "text",
         pythonOptions: ['-u'],
         args: ['clear pppoe lockout mac-address  '+mac+'\n']
        };

    //chay ham Python lay du lieu  
    PythonShell.run('./controllers/SSH.py', option,    function(err, results) {
      if (err) throw err;
      //console.log(results);
      //res.send(results);
      results.forEach( function(data2) {
        if (data2 == 'r/'){
            res.write('\n')
        }else{
           
         //   console.log('in lan 1'+data2);
             ouput_ssh = ouput_ssh+ data2 +'\n';
       
        }
    });
    console.log(ouput_ssh );
    
    res.send(ouput_ssh)
    res.end();
    console.log('da hoan thanh')

      
     
    });

    console.log("Đang clear mac:"+mac)
  }
  kiemtraXT (req, res) {

    var user = req.params.user;
    
    var ouput_ssh ='';
    let { PythonShell } = require('python-shell');
       let option = {
         mode: "text",
         pythonOptions: ['-u'],
         args: ['show subscribers user-name '+user+'\n']
        };

    //chay ham Python lay du lieu  
    PythonShell.run('./controllers/SSH.py', option,    function(err, results) {
      if (err) throw err;
      //console.log(results);
      //res.send(results);
      results.forEach( function(data2) {
        if (data2 == 'r/'){
            res.write('\n')
        }else{
           
         //   console.log('in lan 1'+data2);
             ouput_ssh = ouput_ssh+ data2 +'\n';
       
        }
    });
    console.log(ouput_ssh );
    
    res.send(ouput_ssh)
     res.end();
      console.log('da hoan thanh')

      
     
    });

    console.log("Đang lấy thông tin user"+user)

  }


  clearXT (req, res) {

    var user = req.params.user;
    
    var ouput_ssh ='';
    let { PythonShell } = require('python-shell');
       let option = {
         mode: "text",
         pythonOptions: ['-u'],
         args: ['clear network-access aaa subscriber username '+user+'\n']
        };

    //chay ham Python lay du lieu  
    PythonShell.run('./controllers/SSH.py', option,    function(err, results) {
      if (err) throw err;
      //console.log(results);
      //res.send(results);
      results.forEach( function(data2) {
        if (data2 == 'r/'){
            res.write('\n')
        }else{
           
         //   console.log('in lan 1'+data2);
             ouput_ssh = ouput_ssh+ data2 +'\n';
       
        }
    });
    console.log(ouput_ssh );
    
    res.send(ouput_ssh)
     res.end();
      console.log('da hoan thanh')

      
     
    });

    console.log("Đang clear xt user"+user)

  }

  getVlanNet(req, res) {
    var slid_ip = req.params.slid_ip;
    
    model.getVlanNet(slid_ip, function (err, data) {
      if (!err) {
        res.send(data);
        console.log(data);

      }
      else {
        res.send({ result: "loi" });
       // console.log('loi');
      }

    });
  }
}

module.exports = new SileController();