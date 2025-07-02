import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewApplication = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('marriageApplication'));

  if (!data) {
    return <div className="container my-5 text-center text-danger">No application data found!</div>;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      // Remove current preview form
      localStorage.removeItem('marriageApplication');

      // Also remove from allMarriageApplications
      const all = JSON.parse(localStorage.getItem('allMarriageApplications')) || [];
      const updated = all.filter(form => JSON.stringify(form) !== JSON.stringify(data));
      localStorage.setItem('allMarriageApplications', JSON.stringify(updated));

      alert('Application deleted successfully!');
      navigate('/forms');
    }
  };

  const handleEdit = () => {
    // Set this application as draft to be edited on form page
    localStorage.setItem('editMarriageApplication', JSON.stringify(data));
    navigate('/');
  };

  return (
    <div className="container my-5" style={{ width: '210mm', minHeight: '297mm', background: 'white', padding: '20mm', boxShadow: '0 0 8px rgba(0,0,0,0.2)' }}>
      <h2 className="text-center mb-4 fw-bold text-primary">Vivah Panjikaran Aavedan Patra</h2>

      <div className="row mb-4">
        <div className="col-md-6 text-center">
          <div className="border p-3">
            <img src="https://via.placeholder.com/150" alt="Groom" className="img-thumbnail mb-2" style={{ width: '150px', height: '200px' }} />
            <h5 className="text-success fw-bold">Ladka (Groom)</h5>
            {Object.entries(data.groom).map(([k, v]) => (
              <p key={k}><strong>{k.charAt(0).toUpperCase() + k.slice(1)}:</strong> {v}</p>
            ))}
          </div>
        </div>

        <div className="col-md-6 text-center">
          <div className="border p-3">
            <img src="https://via.placeholder.com/150" alt="Bride" className="img-thumbnail mb-2" style={{ width: '150px', height: '200px' }} />
            <h5 className="text-danger fw-bold">Ladki (Bride)</h5>
            {Object.entries(data.bride).map(([k, v]) => (
              <p key={k}><strong>{k.charAt(0).toUpperCase() + k.slice(1)}:</strong> {v}</p>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <section className="mb-4">
        <h5 className="text-dark fw-bold">Gawah (Gawah aur Pujari):</h5>
        <div className="row">
          {data.gawah.map((name, i) => (
            <div className="col-md-6" key={i}>
              <p><strong>Gawah {i + 1}:</strong> {name}</p>
            </div>
          ))}
        </div>
        <p className="mt-2"><strong>Vivah Tithi:</strong> {data.vivahTithi}</p>
        <p><strong>Form Submitted At:</strong> {data.submittedAt}</p>
      </section>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-outline-primary px-4" onClick={handleEdit}>✏️ Edit</button>
        <button className="btn btn-outline-danger px-4" onClick={handleDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default ViewApplication;
