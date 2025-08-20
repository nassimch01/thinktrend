import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  const openHomeMenu = (e) => {
    e.preventDefault()
    setIsHomeOpen(prev => !prev);
  };
  const openCompanyMenu = (e) => {
    e.preventDefault()
    setIsCompanyOpen(prev => !prev);
  };
  const openServicesMenu = (e) => {
    e.preventDefault()
    setIsServicesOpen(prev => !prev);
  };
  const openBlogMenu = (e) => {
    e.preventDefault()
    setIsBlogOpen(prev => !prev);
  };

  const toggleSideMenu = (e) => {
    e.preventDefault()
    setSideMenuOpen(prev => !prev);
  };

  return (
    <header className="app-header">
      <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Navbar Header */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand" href="/">

              <img className='' src="/assets/img/logo-light.png" class="logo logo-display" alt="Logo" />
              <img className='' src="/assets/img/logo.png" class="logo logo-scrolled" alt="Logo"></img>
            </a>
          </div>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbar-menu">
            <button type="button" className="navbar-toggle" onClick={toggleMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <ul className="nav navbar-nav navbar-center" >
              {/* Repeat for each nav item */}
              <li className="dropdown"
                onMouseEnter={() => setIsHomeOpen(true)}
                onMouseLeave={() => setIsHomeOpen(false)}>
                <a href="#" onClick={openHomeMenu} >Accueil <i className="fa-solid fa-chevron-down"></i></a>
                {isHomeOpen && (
                  <ul className={`dropdown-menu ${isHomeOpen ? 'show' : ''}`}>
                    <li><a href="index.html">Home Version One</a></li>

                  </ul>
                )}
              </li>

              <li className="dropdown"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}>
                <a href="#" onClick={openCompanyMenu}>Notre Agence <i className="fa-solid fa-chevron-down"></i> </a>
                {isCompanyOpen &&
                  (<ul className="dropdown-menu">
                    <li><Link to="/about-company">A propos de nous </Link></li>
                    <li><Link to="/process">Notre Procédure</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </ul>)}
              </li>

              <li className="dropdown"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>
                <a href="#" onClick={openServicesMenu}>Services <i className="fa-solid fa-chevron-down"></i></a>
                {isServicesOpen &&
                  (<ul className="dropdown-menu">
                    <li><Link to="/services">Nos services</Link></li>

                  </ul>)}
              </li>



              <li className="dropdown"
                onMouseEnter={() => setIsBlogOpen(true)}
                onMouseLeave={() => setIsBlogOpen(false)}>
                <a href="#" onClick={openBlogMenu}>Blog <i className="fa-solid fa-chevron-down"></i></a>
                {isBlogOpen &&
                  (<ul className="dropdown-menu">
                    <li><Link to="/blog">Notre Blog</Link></li>

                  </ul>)}
              </li>

              <li><Link to="/contact-us">Contact </Link></li>
            </ul>
          </div>

          {/* Right Attribute Nav */}
          <div className="attr-right">
            <div className="attr-nav">
              <ul>
                <li className="side-menu">
                  <a href="#" onClick={toggleSideMenu}>
                    <span className="bar-1"></span>
                    <span className="bar-2"></span>
                    <span className="bar-3"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Panel */}
          <div className={`side ${sideMenuOpen ? 'on' : ''}`}>
            <a href="#" className="close-side" onClick={toggleSideMenu}>
              <i className="fas fa-times"></i>
            </a>
            <div className="widget">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="Logo Light" />
              </div>
              <p>
                Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
              </p>
            </div>

            <div className="widget address">
              <ul>
                <li>
                  <div className="content">
                    <p>Address</p>
                    <strong>Nabeul, Dar Chaabane Elfehri, 8011</strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Email</p>
                    <strong>info.thinktrend@gmail.com</strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Contact</p>
                    <strong>+216 90-412-026</strong>

                  </div>
                </li>
              </ul>
            </div>

            <div className="widget newsletter">
              <h4 className="title">Get Subscribed!</h4>
              <form action="#">
                <div className="input-group stylish-input-group">
                  <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                  <span className="input-group-addon">
                    <button type="submit">
                      <i className="fas fa-long-arrow-right"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>

            <div className="widget social">
              <ul className="link">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="overlay-screen"></div>
      </nav>
    </header>
  );
}

export default Header;
