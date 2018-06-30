"use strict";//配合，前后端接应上

const express  = require('express');
const router   = express.Router();

const AttractionController = require('../controllers/attraction');


router.get('/search', AttractionController.search); // List all attractions
router.post('/filter', AttractionController.filterattraction); // List all attractions
router.post('/', AttractionController.createpreattraction); // List all attractions
router.put('/:attractionId', AttractionController.updateattraction); // Update content of attraction by Id
router.delete('/:attractionId', AttractionController.removeattraction); // Delete a attraction by Id
router.put('/approve/:attractionId', AttractionController.approveattraction);// Approve a attraction by Id
router.get('/readdetail/:attractionId', AttractionController.readdetailinfo);// Read a attraction by Id
router.get('/readgeneral/:attractionId', AttractionController.readgeneralinfo);// Read a attraction by Id
router.get('/pre', AttractionController.listpreattraction); // List all attractions
router.get('/', AttractionController.listattraction); // List all attractions
router.get('/title/:attractionTitle', AttractionController.getAttractionidbytitle); // List all attractions

module.exports = router;
