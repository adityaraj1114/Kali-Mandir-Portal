import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div className="container py-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="fw-bold text-primary">Contact Us</h1>
        <p className="text-muted">We would love to hear from you! Please fill out the form below.</p>
      </motion.div>

      <motion.div
        className="row justify-content-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                {/* Add any additional fields like mobile number here */}
                <div className="d-grid">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn btn-primary fw-bold"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
