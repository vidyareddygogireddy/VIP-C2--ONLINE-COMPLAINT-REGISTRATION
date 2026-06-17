import React, { useState } from 'react';

function ComplaintForm({ onSubmit }) {
  const [complaintType, setComplaintType] = useState('Internet Not Working');
  const [specifyOther, setSpecifyOther] = useState('');
  const [category, setCategory] = useState('Technical');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [description, setDescription] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine the actual type of complaint
    const finalComplaintType = complaintType === 'Other' ? specifyOther : complaintType;

    const formData = {
      title: finalComplaintType,
      category: category,
      description: description,
      complainantName: name,
      mobile: mobile,
      email: email,
      location: location,
      dateOfIssue: dateOfIssue,
      attachment: attachment // Standard payload wrapper
    };

    onSubmit(formData);

    // Reset Form fields
    setComplaintType('Internet Not Working');
    setSpecifyOther('');
    setCategory('Technical');
    setName('');
    setMobile('');
    setEmail('');
    setLocation('');
    setDateOfIssue('');
    setDescription('');
    setAttachment(null);
  };

  return (
    <div className="card shadow-sm border-0 rounded-3">
      <div className="card-header bg-primary text-white py-3">
        <h5 className="card-title mb-0 fw-bold">Social Service Complaint Registration</h5>
        <small className="text-white-50">Please fill out the form below to register your complaint.</small>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          
          {/* Section 1: Complaint Classification */}
          <h6 className="text-uppercase text-secondary fw-bold mb-3 border-bottom pb-2">Complaint Classification</h6>
          
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Complaint Type</label>
              <select
                className="form-select"
                value={complaintType}
                onChange={(e) => setComplaintType(e.target.value)}
                required
              >
                <option value="Internet Not Working">Internet Not Working</option>
                <option value="Slow Internet">Slow Internet</option>
                <option value="Billing Issue">Billing Issue</option>
                <option value="Network Coverage">Network Coverage</option>
                <option value="Service Disruption">Service Disruption</option>
                <option value="Equipment Fault">Equipment Fault</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="col-md-6">
              <label className="form-label fw-semibold">Category</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Technical">Technical</option>
                <option value="Billing">Billing</option>
                <option value="Administrative">Administrative</option>
                <option value="General Support">General Support</option>
              </select>
            </div>

            {/* Conditional field for Specify Complaint */}
            {complaintType === 'Other' && (
              <div className="col-12 mt-2">
                <label className="form-label fw-semibold text-danger">Specify Complaint Type</label>
                <input
                  type="text"
                  className="form-control border-danger"
                  placeholder="Please specify your complaint type"
                  value={specifyOther}
                  onChange={(e) => setSpecifyOther(e.target.value)}
                  required
                />
              </div>
            )}
          </div>

          {/* Section 2: Complainant Details */}
          <h6 className="text-uppercase text-secondary fw-bold mb-3 border-bottom pb-2">Complainant Details</h6>
          
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Complainant Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label fw-semibold">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="e.g. +1 234 567 890"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Location / Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="City, State or Region"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Section 3: Complaint Description */}
          <h6 className="text-uppercase text-secondary fw-bold mb-3 border-bottom pb-2">Incident Information</h6>
          
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Date of Issue</label>
              <input
                type="date"
                className="form-control"
                value={dateOfIssue}
                onChange={(e) => setDateOfIssue(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Attachment Upload (Images / PDF)</label>
              <input
                type="file"
                className="form-control"
                accept="image/*,.pdf"
                onChange={(e) => setAttachment(e.target.files[0])}
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Detailed Description</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Describe your issue in detail. Please provide all relevant background information..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm mt-2">
            Submit Complaint
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default ComplaintForm;
