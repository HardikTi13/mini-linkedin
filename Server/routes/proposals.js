const express = require('express');
const router = express.Router();
const proposalController = require('../controller/proposal');
const verifyToken = require('../middleware/token');

router.post('/',verifyToken, proposalController.createProposal);
router.get('/', proposalController.getAllProposal);
router.get('/:id', proposalController.getProposalById);
router.put('/:id', proposalController.updateProposal);
router.delete('/:id', proposalController.deleteProposal);

module.exports = router;
