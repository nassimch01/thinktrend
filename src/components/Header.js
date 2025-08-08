import React from 'react';


function Header() {
   
  return (
    <header className='app-header'> <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background">

            <div className="container d-flex justify-content-between align-items-center">            
                

            
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/logo-light.png" className="logo logo-display" alt="Logo"/>
                        <img src="assets/img/logo.png" className="logo logo-scrolled" alt="Logo"/>
                    </a>
                </div>
                

             
                <div className="collapse navbar-collapse" id="navbar-menu">

                    <img src="assets/img/logo.png" alt="Logo"/>
                    <button type="button" ClassName="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-times"></i>
                    </button>
                    
                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                            <ul className="dropdown-menu">
                                <li><a href="index.html">Home Version One</a></li>
                                <li><a href="index-2.html">Home Version Two</a></li>
                                <li><a href="index-3.html">Home Version Three</a></li>
                                <li><a href="index-4.html">Home Version Four</a></li>
                                <li><a href="index-5.html">Home Version Five</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Company</a>
                            <ul className="dropdown-menu">
                                <li><a href="about-us.html">About Company</a></li>
                                <li><a href="team.html">Meet Our Team</a></li>
                                <li><a href="team-carousel.html">Team Carousel</a></li>
                                <li><a href="contact.html">Get in Touch</a></li>
                                <li><a href="process.html">Our Process</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="404.html">Error Page</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Services</a>
                            <ul className="dropdown-menu">
                                <li><a href="services.html">Services Version One</a></li>
                                <li><a href="services-2.html">Services Version Two</a></li>
                                <li><a href="services-3.html">Services Version Three</a></li>
                                <li><a href="services-4.html">Services Version Four</a></li>
                            </ul>
                        </li>
                        <li><a href="case-studies.html">Case Studies</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                            <ul className="dropdown-menu">
                                <li><a href="blog-standard.html">Blog Standard</a></li>
                                <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                <li><a href="blog-single.html">Blog Single</a></li>
                                <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="attr-right">
                    
                    <div className="attr-nav">
                        <ul>
                            <li className="side-menu">
                                <a href="#">
                                    <span className="bar-1"></span>
                                    <span className="bar-2"></span>
                                    <span className="bar-3"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>


             
                <div className="side">
                    <a href="#" className="close-side"><i className="fas fa-times"></i></a>
                    <div className="widget">
                        <div className="logo">
                            <img src="assets/img/logo-light.png" alt="Logo"/>
                        </div>
                        <p>
                            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
                        </p>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Address</p> 
                                        <strong>California, TX 70240</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p> 
                                        <strong>support@validtheme.com</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Contact</p> 
                                        <strong>+44-20-7328-4499</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Get Subscribed!</h4>
                        <form action="#">
                            <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" className="form-control" name="email"/>
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
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
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
