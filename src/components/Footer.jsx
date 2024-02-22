import React from "react";

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: "#592094" }}>
      <footer className="bg-info text-center text-lg-start fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>About Us</h3>
              <p>
                Worship of Lord Sri Satyanarayan (Sri Maha Vishnu) is an
                integral part of Sanatan Dharma. This auspicious Satyanarayan
                Katha narration comes from one of the 18 puranas, the Skanda
                Purana. It is in the form of a dialog between Lord Vishnu and
                Sage Narada.
              </p>
            </div>
            <div className="col-lg-3">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">News & Events</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3>Our Address</h3>
              <p>By appointment only</p>
              <p>Phone: +1 469 569 0102 / +1 469 664 9910</p>
              <p>Email: info@rvvsstemple.com / rvvsstemple@gmail.com</p>
              <p>Website: www.rvvsstemple.com</p>
              <p>
                All Rights Reserved © 2017 Sri Veera Venkata Sathya Narayana
                Swamy Temple
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
