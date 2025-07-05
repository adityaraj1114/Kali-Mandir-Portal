import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MarriageForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(false);

  const initialState = {
    groom: {
      naam: '', pita: '', mata: '', dob: '', maritalStatus: '', rashtriyata: '', dharma: '', mobile: '', address: '',
    },
    bride: {
      naam: '', pita: '', mata: '', dob: '', maritalStatus: '', rashtriyata: '', dharma: '', mobile: '', address: '',
    },
    gawah: ['', '', '', '', ''],
    vivahTithi: '',
    submittedAt: new Date().toISOString().split('T')[0],
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const draft = localStorage.getItem('editMarriageApplication');
    if (draft) {
      setIsEditing(true);
      setFormData(JSON.parse(draft));
    } else {
      setIsEditing(false);
      setFormData(initialState); // ensure it's cleared if not editing
    }
  }, [location.pathname]);

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

    localStorage.setItem('marriageApplication', JSON.stringify(application));
    let existing = JSON.parse(localStorage.getItem('allMarriageApplications')) || [];

    if (isEditing) {
      const old = localStorage.getItem('editMarriageApplication');
      const index = existing.findIndex(item => JSON.stringify(item) === old);
      if (index !== -1) {
        existing[index] = application;
      }
      localStorage.removeItem('editMarriageApplication');
      setIsEditing(false);
    } else {
      existing.push(application);
    }

    localStorage.setItem('allMarriageApplications', JSON.stringify(existing));
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
                  <input type="date" className="form-control" value={formData.groom[field]} onChange={e => handleChange(e, 'groom', field)} required />
                ) : field === 'maritalStatus' ? (
                  <select className="form-select" value={formData.groom[field]} onChange={e => handleChange(e, 'groom', field)} required>
                    <option value="">Select</option>
                    <option>Unmarried</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                ) : field === 'address' ? (
                  <textarea className="form-control" rows="2" value={formData.groom[field]} onChange={e => handleChange(e, 'groom', field)} required />
                ) : (
                  <input type="text" className="form-control" value={formData.groom[field]} onChange={e => handleChange(e, 'groom', field)} required />
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
                  <input type="date" className="form-control" value={formData.bride[field]} onChange={e => handleChange(e, 'bride', field)} required />
                ) : field === 'maritalStatus' ? (
                  <select className="form-select" value={formData.bride[field]} onChange={e => handleChange(e, 'bride', field)} required>
                    <option value="">Select</option>
                    <option>Unmarried</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                ) : field === 'address' ? (
                  <textarea className="form-control" rows="2" value={formData.bride[field]} onChange={e => handleChange(e, 'bride', field)} required />
                ) : (
                  <input type="text" className="form-control" value={formData.bride[field]} onChange={e => handleChange(e, 'bride', field)} required />
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
              <input type="text" className="form-control" value={g} onChange={e => handleChange(e, 'gawah', null, i)} required />
            </div>
          ))}
          <div className="mb-3">
            <label className="form-label">Vivah ki Tithi</label>
            <input type="date" className="form-control" value={formData.vivahTithi} onChange={e => setFormData({ ...formData, vivahTithi: e.target.value })} required />
          </div>
        </fieldset>

        <div className="text-center d-flex flex-column align-items-center gap-3">
          <button type="submit" className="btn btn-success px-5 py-2 fw-bold">
            {isEditing ? 'Update Form' : 'Submit Form'}
          </button>
          <button type="button" className="btn btn-outline-primary px-5" onClick={handleViewForm}>
            View Application Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default MarriageForm;
