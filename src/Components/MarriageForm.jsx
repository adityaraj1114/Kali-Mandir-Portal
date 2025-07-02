import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MarriageForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    groom: {
      naam: '', pita: '', mata: '', dob: '', maritalStatus: '', rashtriyata: '', dharma: '', mobile: '', address: '',
    },
    bride: {
      naam: '', pita: '', mata: '', dob: '', maritalStatus: '', rashtriyata: '', dharma: '', mobile: '', address: '',
    },
    gawah: ['', '', '', '', ''],
    vivahTithi: '',
    submittedAt: new Date().toISOString().split('T')[0], // 'YYYY-MM-DD'
  });

  const handleChange = (e, section, field, index) => {
    const value = e.target.value;
    if (section === 'gawah') {
      const updated = [...formData.gawah];
      updated[index] = value;
      setFormData({ ...formData, gawah: updated });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [field]: value }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const application = {
      groom: formData.groom,
      bride: formData.bride,
      gawah: formData.gawah,
      vivahTithi: formData.vivahTithi,
      submittedAt: formData.submittedAt,
    };
  
    // Save for preview
    localStorage.setItem('marriageApplication', JSON.stringify(application));
  
    // Save to all applications
    const existing = JSON.parse(localStorage.getItem('allMarriageApplications')) || [];
    existing.push(application);
    localStorage.setItem('allMarriageApplications', JSON.stringify(existing));
  
    // Navigate to view
    navigate('/view-application');
  };
    

  const handleViewForm = () => {
    navigate('/view-application');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Vivah Panjikaran Aavedan Patra</h2>
      <form onSubmit={handleSubmit}>
        {/* Groom Section */}
        <fieldset className="border p-4 rounded mb-4 bg-light">
          <legend className="w-auto px-3 fw-bold text-success">Ladka (Groom) Ki Jankari</legend>
          <div className="row g-3">
            {['naam', 'pita', 'mata', 'dob', 'maritalStatus', 'rashtriyata', 'dharma', 'mobile', 'address'].map((field, idx) => (
              <div key={idx} className={`col-md-${field === 'address' ? 8 : 4}`}>
                <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {field === 'dob' ? (
                  <input type="date" className="form-control" onChange={e => handleChange(e, 'groom', field)} required />
                ) : field === 'maritalStatus' ? (
                  <select className="form-select" onChange={e => handleChange(e, 'groom', field)} required>
                    <option value="">Select</option>
                    <option>Unmarried</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                ) : field === 'address' ? (
                  <textarea className="form-control" rows="2" onChange={e => handleChange(e, 'groom', field)} required></textarea>
                ) : (
                  <input type="text" className="form-control" onChange={e => handleChange(e, 'groom', field)} required />
                )}
              </div>
            ))}
          </div>
        </fieldset>

        {/* Bride Section */}
        <fieldset className="border p-4 rounded mb-4 bg-light">
          <legend className="w-auto px-3 fw-bold text-danger">Ladki (Bride) Ki Jankari</legend>
          <div className="row g-3">
            {['naam', 'pita', 'mata', 'dob', 'maritalStatus', 'rashtriyata', 'dharma', 'mobile', 'address'].map((field, idx) => (
              <div key={idx} className={`col-md-${field === 'address' ? 8 : 4}`}>
                <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {field === 'dob' ? (
                  <input type="date" className="form-control" onChange={e => handleChange(e, 'bride', field)} required />
                ) : field === 'maritalStatus' ? (
                  <select className="form-select" onChange={e => handleChange(e, 'bride', field)} required>
                    <option value="">Select</option>
                    <option>Unmarried</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                ) : field === 'address' ? (
                  <textarea className="form-control" rows="2" onChange={e => handleChange(e, 'bride', field)} required></textarea>
                ) : (
                  <input type="text" className="form-control" onChange={e => handleChange(e, 'bride', field)} required />
                )}
              </div>
            ))}
          </div>
        </fieldset>

        {/* Witness Section */}
        <fieldset className="border p-4 rounded mb-4 bg-light">
          <legend className="w-auto px-3 fw-bold text-dark">Gawah aur Pujari Ki Jankari</legend>
          {formData.gawah.map((g, i) => (
            <div className="mb-3" key={i}>
              <label className="form-label">Gawah {i + 1} ka Naam</label>
              <input type="text" className="form-control" onChange={e => handleChange(e, 'gawah', null, i)} required />
            </div>
          ))}
          <div className="mb-3">
            <label className="form-label">Vivah ki Tithi</label>
            <input type="date" className="form-control" onChange={e => setFormData({ ...formData, vivahTithi: e.target.value })} required />
          </div>
        </fieldset>

        <div className="text-center d-flex flex-column align-items-center gap-3">
          <button type="submit" className="btn btn-success px-5 py-2 fw-bold">Submit Form</button>
          <button type="button" className="btn btn-outline-primary px-5" onClick={handleViewForm}>View Application Form</button>
        </div>
      </form>
    </div>
  );
};

export default MarriageForm;
