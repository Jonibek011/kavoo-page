import { useState } from "react";
import USA from "../assets/USA.png";
import arrow from "../assets/Vector.png";
import bg from "../assets/bg-image.png";
import bg2 from "../assets/bg-second.png";
import globe from "../assets/globe.png";
import qrcode from "../assets/qr-code.png";

import { Link } from "react-router";

function EngHome() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown((Prev) => {
      return Prev == false ? true : false;
    });
    console.log(showDropdown);
  };
  return (
    <div className="home">
      <header className="header">
        <nav className="navbar-menu custom-container">
          <span className="logo">Kavoo</span>
          <div className="nav-list">
            <ul className="nav-items">
              <li className="nav-item">
                <Link to="#" className="navLink">
                  How It Works?
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="navLink">
                  Contact US
                </Link>
              </li>
            </ul>
            <div className="login">
              <button className="login-button">Partner Login</button>
            </div>
            <div className="dropdown" onClick={handleDropdown}>
              <span className="flag">
                <img
                  src={USA}
                  alt="england flag"
                  style={{ width: "20px", height: "20px" }}
                />
              </span>
              <span className="lang">Eng</span>
              <span className="arrow-down ">
                <img
                  className={`arrow-img ${showDropdown ? "up" : ""}`}
                  src={arrow}
                  alt=""
                  style={{ width: "20px", height: "13px" }}
                />
              </span>
              <span
                className={`lang-modal  ${showDropdown ? "showdropdown" : ""}`}
              >
                <span>Eng</span>
                <Link to="/french">French</Link>
              </span>
            </div>
          </div>
        </nav>
      </header>

      <section className="home-section custom-container">
        <div className="main-section">
          <img src={bg} alt="" className="bg-image" />

          <h1 className="main-text">
            The AI Platform That Enhance Your Customer experience
          </h1>
          <p className="main-info">
            Easily gather insights, automate responses, and build stronger
            customer relationships.
          </p>
          <div className="buttons">
            <span className="ellipce"></span>
            <button className="demo-button">Book a Demo</button>
            <button className="more-button">Learn More</button>
          </div>
        </div>
        <div className="bg2-img">
          <img src={bg2} alt="bg2-main " />
          <img src={qrcode} alt="" className="qr" />
          <img src={globe} alt="" className="globe" />
        </div>
      </section>

      {/* ===================================================== */}
      <section className="work-section custom-container">
        <div className="work-container">
          <h1 className="work-title">How Kavoo Works</h1>
          <div className="work-cards">
            <div className="first-card">
              <img src="./Vector1.png" alt="fdjalkfjl" className="vector" />
              <div className="img-container">
                <img src="./first-img.png" alt="" className="first-img" />
              </div>
              <div className="card-info">
                <h1 className="card-title">Scan the QR Code</h1>
                <p className="card-text">Customer scan a QR code to start</p>
              </div>
            </div>
            {/* ============================================================= */}
            <div className="second-card">
              <img src="./Vector1.png" alt="fdjalkfjl" className="vector" />
              <div className="img-container">
                <img src="./second-img.png" alt="" className="second-img" />
              </div>
              <div className="card-info">
                <h1 className="card-title">Share Experience</h1>
                <p className="card-text">
                  Fill out surveys, leave comments, upload photos, or record
                  videos.
                </p>
              </div>
            </div>
            {/* ========================================================== */}
            <div className="third-card">
              <div className="img-container">
                <img src="./third-img.png" alt="" className="third-img" />
              </div>
              <div className="card-info">
                <h1 className="card-title">Instant Submission</h1>
                <p className="card-text">
                  Experience is sent directly to the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      <section className="career-section custom-container">
        <div className="career-main">
          <h1 className="career-title">Why Choose Kavoo?</h1>
          <p className="career-text">
            An AI-Powered, fully automated customer experience loop that
            guarantees 100% engagement with every feedback and experience
            shared.
          </p>
          <div className="career-cards">
            <div className="card">
              <div className="upper-card">
                <img src="./career1.png" alt="" />
              </div>
              <h1 className="career-card-title">Automated Responses</h1>
            </div>
            {/* =================================================================== */}
            <div className="card">
              <div className="upper-card">
                <img src="./career2.png" alt="" />
              </div>
              <h1 className="career-card-title">Real-Time Insights</h1>
            </div>
            {/* ============================================================= */}
            <div className="card">
              <div className="upper-card">
                <img src="./career3.png" alt="" />
              </div>
              <h1 className="career-card-title">Quick Issues Resolution</h1>
            </div>
            {/* =========================================================== */}
            <div className="card">
              <div className="upper-card">
                <img src="./career4.png" alt="" />
              </div>
              <h1 className="career-card-title">Social Media Sharing</h1>
            </div>
          </div>
        </div>
      </section>
      <h1 className="underline bg-black text-white w-[400px]">hello</h1>
    </div>
  );
}

export default EngHome;
