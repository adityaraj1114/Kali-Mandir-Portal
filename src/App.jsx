import React, { useState } from 'react'; // ✅ Add this line
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./Components/Login";
import MarriageForm from "./Components/MarriageForm";
import ViewApplication from './Components/ViewApplication';
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
import Forms from './Components/Forms';
// import ContactUs from './Components/ContactUs';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register-marriage" element={isAuthenticated ? <MarriageForm /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/forms" element={<Forms />} />
        <Route path="/view-application" element={<ViewApplication />} />
        {/* <Route path="/marriage-form" element={<MarriageForm />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
