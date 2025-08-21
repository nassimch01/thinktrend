import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  const handleClick = () => {
    // Action personnalisée ici
    console.log('Lien cliqué');
    // Par exemple, fermer un menu mobile ou réinitialiser un état
  };
  const openCompanyMenu = (e) => {
    e.preventDefault()
    setIsCompanyOpen(prev => !prev);
  };
  const openServicesMenu = (e) => {
    e.preventDefault()
    setIsServicesOpen(prev => !prev);
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
              <li >

                <Link to="/" onClick={handleClick}>
                  Accueil
                </Link>

              </li>

              <li className="dropdown"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}>
                <a href="#" onClick={openCompanyMenu}>Notre Agence <i className="fa-solid fa-chevron-down"></i> </a>
                {isCompanyOpen &&
                  (<ul className="dropdown-menu">
                    <li><Link to="/about-company">A propos de nous </Link></li>
                    <li><Link to="/process">Notre Procédure</Link></li>

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



              <li><Link to="/blog">BLOG</Link></li>


              <li><Link to="/contact-us">Contact </Link></li>
              <li><Link to="/login">Login</Link></li>

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
