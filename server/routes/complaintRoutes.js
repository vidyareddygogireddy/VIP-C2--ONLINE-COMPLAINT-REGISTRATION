const express = require('express');
const router = express.Router();
const { 
  createComplaint, 
  getMyComplaints, 
  getAllComplaints, 
  updateComplaintStatus, 
  assignAgent,
  deleteComplaint 
} = require('../controllers/complaintController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

// All complaint routes require JWT login
router.use(protect);

// 1. Create a Complaint (POST /api/complaints)
router.post('/', createComplaint);

// 2. Get My Complaints (GET /api/complaints/my)
router.get('/my', getMyComplaints);

// 3. Get All Complaints (GET /api/complaints) - Accessible to Admin and Agent
router.get('/', authorize('ADMIN', 'AGENT'), getAllComplaints);

// 4. Update Complaint Status (PUT /api/complaints/:id/status) - Accessible to Admin and Agent
router.put('/:id/status', authorize('ADMIN', 'AGENT'), updateComplaintStatus);

// 5. Assign Agent (PUT /api/complaints/:id/assign) - Accessible to Admin
router.put('/:id/assign', authorize('ADMIN'), assignAgent);

// 6. Delete Complaint (DELETE /api/complaints/:id)
router.delete('/:id', deleteComplaint);

module.exports = router;
