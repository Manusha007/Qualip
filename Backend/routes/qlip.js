const express =require('express');
const router = express.Router();

const qlipCtrl = require('../controllers/qlip');                

const Dashreports = require('../Models/dashreports');
const Pastreports = require('../Models/dashreports');

router.post('/', qlipCtrl.createPastreports);

router.get('/', qlipCtrl.getpastrep);

router.get('/:id', qlipCtrl.getpastrepone);
router.delete('/:id', qlipCtrl.dltreport);
router.post('/', qlipCtrl.createDashreports);

router.get('/', qlipCtrl.getdashrep)


module.exports = router;