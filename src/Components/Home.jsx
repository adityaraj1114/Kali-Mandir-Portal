// import React from "react";
import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// Make sure these files exist in src/images or update the paths below to the correct location
import maakali1 from "../images/maakali1.jpg";
import maakali2 from "../images/maakali2.jpg";
import maakali3 from "../images/maakali3.jpg";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container-fluid m-auto bg-primary-subtle"
    >
      <div className="text-center mb-5">
        {/* <motion.img
          src="https://www.pexels.com/photo/man-raising-his-left-hand-2351722/"
          alt="Kali Mata Mandir"
          className="img-fluid rounded shadow"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        /> */}

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={maakali1} className="d-block w-100" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First Slide Label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={maakali2}
                className="d-block w-100"
                alt="Second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second Slide Label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={maakali3} className="d-block w-100" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third Slide Label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className="mt-5 text-primary fw-bold">काली माता की जय हो!</h1>
        <p className="lead mt-3">
          Welcome to Kali Mata Mandir - A sacred place of devotion, tradition,
          and divine energy.
        </p>
      </div>

      <motion.div
        className="row text-center p-3"
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
       {/* -------------------------------card section-------------------------------- */}

        <motion.div className="col-md-4 mb-4 p-3" whileHover={{ scale: 1.05 }}>
          <div className="card shadow w-100 h-100">
            <div className="card">
              <img src={maakali1} className="card-img-top" alt="Card visual" style={{ height: '350px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h5 className="card-title">Daily Pooja</h5>
                <p className="card-text">
                  Join us every morning and evening for Kali Maa's aarti and
                  bhajan sessions.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-md-4 mb-4 p-3" whileHover={{ scale: 1.05 }}>

          <div className="card shadow w-100 h-100">
            <div className="card">
              <img src={maakali2} className="card-img-top" alt="Card visual" style={{ height: '350px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h5 className="cardtitle">Festival Celebrations</h5>
                <p className="card-text">
                  Be part of grand celebrations during Navratri, Deepavali, and
                other spiritual events.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-md-4 mb-4 p-3" whileHover={{ scale: 1.05 }}>
           <div className="card shadow w-100 h-100">
            <div className="card">
              <img src={maakali3} className="card-img-top" alt="Card visual" style={{ height: '350px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h5 className="card-title">Marriage Registrations</h5>
                <p className="card-text">
                  Now register your marriage easily at the temple with digital records.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
