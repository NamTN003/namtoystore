var express = require('express');
const SpindleModel = require('../models/SpindleModel');
var router = express.Router();


router.get('/', async (req, res) => {
    var spindles = await SpindleModel.find();
    res.render('spindle', { spindles: spindles });
  })

  router.get('/admin', async (req, res) => {
   var spindles = await SpindleModel.find();
   res.render('spindle/admin', { spindles: spindles, layout : false});
 })

  router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var spindle = await SpindleModel.findById(id);
    res.render('spindle/detail', { spindle: spindle });
})


router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    
    await SpindleModel.findByIdAndDelete(id);
    console.log('Delete toy succeed');
    res.redirect('/spindle/admin');
 })

 router.get('/add', (req, res) => {
    res.render('spindle/add');
 })
 
 router.post('/add', async (req, res) => {
    var spindle = req.body;
    await SpindleModel.create(spindle);
    console.log('Add toy succeed !');
    res.redirect('/spindle/admin');
 })

 router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var spindle = await SpindleModel.findById(id);
   res.render('spindle/edit', { spindle : spindle })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var spindle = req.body;
   await SpindleModel.findByIdAndUpdate(id, spindle);
   console.log('Update toy succeed !');
   res.redirect('/toy');
})

  module.exports = router