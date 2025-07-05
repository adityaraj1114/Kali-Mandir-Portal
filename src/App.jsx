import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import MarriageForm from "./Components/MarriageForm";
import ViewApplication from "./Components/ViewApplication";
import Navbar from "./Components/Navbar";
import Forms from "./Components/Forms";
import ContactUs from "./Components/ContactUs";
import PrivateRoute from "./Components/PrivateRoute"; // ✅ new

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/"
          element={           
              <Home />           
          }
        />

        <Route
          path="/register-marriage"
          element={
            <PrivateRoute>
              <MarriageForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/forms"
          element={
            <PrivateRoute>
              <Forms />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-application"
          element={
            <PrivateRoute>
              <ViewApplication />
            </PrivateRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactUs />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
