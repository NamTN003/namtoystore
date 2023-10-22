var express = require('express');
const HammerModel = require('../models/HammerModel');

var router = express.Router();

router.get('/', async (req, res) => {
    var hammer = await HammerModel.find();
    res.render('hammer/index', { hammer: hammer });
 })

 router.get('/admin', async (req, res) => {
    var hammers = await HammerModel.find();
    res.render('hammer/admin', { hammers: hammers, layout : false});
  })

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var hammer = await HammerModel.findById(id);
    res.render('hammer/detail', { hammer: hammer });
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    
    await HammerModel.findByIdAndDelete(id);
    console.log('Delete toy succeed');
    res.redirect('/hammer/admin');
 })

 router.get('/add', (req, res) => {
    res.render('hammer/add');
 })

router.post('/add', async (req, res) => {
    var hammer = req.body;
    await HammerModel.create(hammer);
    console.log('Add toy succeed !');
    res.redirect('/hammer/admin');
 })

module.exports = router;