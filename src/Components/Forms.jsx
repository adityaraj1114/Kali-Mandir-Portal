import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const Forms = () => {
  const [forms, setForms] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredForms, setFilteredForms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const navigate = useNavigate();

  const getGroomName = (form) => form?.groom?.naam || form?.groom?.name || 'Unknown';

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('allMarriageApplications')) || [];
    const validForms = saved.filter(
      (form) => (form?.groom?.naam || form?.groom?.name) && form?.submittedAt && typeof form === 'object'
    );
    setForms(validForms);
    setFilteredForms(validForms);
  }, []);

  const handleSearch = () => {
    const results = forms.filter((form) => {
      const groomName = getGroomName(form).toLowerCase();
      const matchesDate = !filterDate || form.submittedAt?.startsWith(filterDate);
      const matchesName = !searchName || groomName.includes(searchName.toLowerCase());
      return matchesDate && matchesName;
    });
    setFilteredForms(results);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredForms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedForms = filteredForms.slice(startIndex, startIndex + itemsPerPage);

  const handleView = (form) => {
    localStorage.setItem('marriageApplication', JSON.stringify(form));
    navigate('/view-application');
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this form?');
    if (!confirmDelete) return;

    const toDelete = paginatedForms[index];
    const updatedForms = forms.filter((f) => f !== toDelete);
    setForms(updatedForms);
    setFilteredForms(updatedForms);
    localStorage.setItem('allMarriageApplications', JSON.stringify(updatedForms));
  };

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-primary text-center fw-bold">Submitted Marriage Forms</h3>

      <div className="row mb-3">
        <div className="col-md-3 mb-2">
          <input
            type="date"
            className="form-control"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search Groom Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <ul className="list-group">
        {paginatedForms.map((form, idx) => (
          <li
            key={startIndex + idx}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{startIndex + idx + 1}. {getGroomName(form)}</strong> &nbsp;
              <small className="text-muted">({form.submittedAt})</small>
            </div>
            <div>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => handleView(form)}
              >
                View
              </button>
            </div>
          </li>
        ))}
        {paginatedForms.length === 0 && (
          <li className="list-group-item text-center text-muted">
            No forms found
          </li>
        )}
      </ul>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="fw-bold">
            {currentPage} / {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary ms-2"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Forms;
