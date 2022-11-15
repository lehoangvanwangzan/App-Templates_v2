const express = require('express');
const router = express.Router();
// const { errorHandler } = require('../middleware/errorHandler');
const  sideController = require('../controllers/SideController');
const telnetcontroller = require('../controllers/telnetcontroller');

//tro den ham index controller

router.get("/getInfoOLT/:ip", sideController.getInfoOLT);
router.get("/getmacOLT/:slid_ip", sideController.getmacOLT);
router.get("/kiemtraXT/:user", sideController.kiemtraXT);
router.get("/clearXT/:user", sideController.clearXT);
router.get("/clearMacONU/:mac", sideController.clearMacONU);
router.get("/getInfoOnuOLT/:slid_ip", sideController.getInfoOnuOLT);
router.get("/getVlanNet/:slid_ip", sideController.getVlanNet);
router.get("/getmacOLT/:ip", sideController.getInfoOLT);
router.use("/search", sideController.search);
router.use('/optrxsfp', telnetcontroller.getreport);
router.use('/telnet', telnetcontroller.getTelnet);
router.use("/", sideController.index);
// router.all('*',(req,res,next)=>{
//     const err = new Error('The route can not be found');
//     err.statusCode = 404;
//     next(err);
// });
// router.use(errorHandler);

module.exports =router;
