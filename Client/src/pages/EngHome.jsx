import { useState } from "react";
import USA from "../assets/USA.png";
import arrow from "../assets/Vector.png";
import bg from "../assets/bg-image.png";
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
      </section>
      <h1 className="underline bg-black text-white w-[400px]">hello</h1>
    </div>
  );
}

export default EngHome;
