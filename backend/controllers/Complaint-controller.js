const Complaint = require('../models/ComplaintSchema.js');

const ComplaintCreate = async (req, res) => {
    try {
        const Complaint = new Complaint(req.body)
        const result = await Complaint.save()
        res.send(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

const ComplaintList = async (req, res) => {
    try {
        let Complaints = await Complaint.find({ school: req.params.id }).populate("user", "name");
        if (Complaints.length > 0) {
            res.send(Complaints)
        } else {
            res.send({ message: "No Complaints found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { ComplaintCreate, ComplaintList };
