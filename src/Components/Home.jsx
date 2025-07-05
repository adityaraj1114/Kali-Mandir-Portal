import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container my-5"
    >

      <div className="text-center mb-5">
        <motion.img
          src="https://www.pexels.com/photo/man-raising-his-left-hand-2351722/"
          alt="Kali Mata Mandir"
          className="img-fluid rounded shadow"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <h1 className="mt-4 text-primary fw-bold">
          काली माता की जय हो!
        </h1>
        <p className="lead mt-3">
          Welcome to Kali Mata Mandir - A sacred place of devotion, tradition, and divine energy.
        </p>
      </div>

      <motion.div
        className="row text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div className="col-md-4 mb-4" whileHover={{ scale: 1.05 }}>
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-success fw-bold">Daily Pooja</h5>
              <p className="card-text">
                Join us every morning and evening for Kali Maa's aarti and bhajan sessions.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-md-4 mb-4" whileHover={{ scale: 1.05 }}>
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-danger fw-bold">Festival Celebrations</h5>
              <p className="card-text">
                Be part of grand celebrations during Navratri, Deepavali, and other spiritual events.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-md-4 mb-4" whileHover={{ scale: 1.05 }}>
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Marriage Registrations</h5>
              <p className="card-text">
                Now register your marriage easily at the temple with digital records.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
