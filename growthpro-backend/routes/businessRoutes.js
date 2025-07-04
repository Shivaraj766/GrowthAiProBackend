const express = require('express');
const router = express.Router();
const { getBusinessData, regenerateHeadline } = require('../controllers/businessController');

// POST /api/business-data
router.post('/business-data', getBusinessData);

// GET /api/regenerate-headline
router.get('/regenerate-headline', regenerateHeadline);

module.exports = router;
