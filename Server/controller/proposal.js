const Proposal = require('../models/proposal');

exports.createProposal = async (req, res) => {
  try {
    const proposal = await Proposal.create({
      ...req.body,
      userId: req.user.id, 
    });
    res.status(201).json(proposal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProposal = async (req, res) => {
  try {
    const all = await Proposal.find().populate("userId");
    res.status(200).json(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProposalById = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id).populate('userId');
    if (!proposal) return res.status(404).json({ message: 'Proposal not found' });
    res.status(200).json(proposal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProposal = async (req, res) => {
  try {
    const deleted = await Proposal.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Proposal not found' });
    res.status(200).json({ message: 'Proposal deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateProposal = async (req, res) => {
  try {
    const updated = await Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Proposal not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};
