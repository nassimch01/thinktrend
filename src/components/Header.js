import React from 'react';


function Header() {
   
  return (
    <header className='app-header'> <nav class="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background">

            <div class="container d-flex justify-content-between align-items-center">            
                

            
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/logo-light.png" class="logo logo-display" alt="Logo"/>
                        <img src="assets/img/logo.png" class="logo logo-scrolled" alt="Logo"/>
                    </a>
                </div>
                

             
                <div class="collapse navbar-collapse" id="navbar-menu">

                    <img src="assets/img/logo.png" alt="Logo"/>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-times"></i>
                    </button>
                    
                    <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                            <ul class="dropdown-menu">
                                <li><a href="index.html">Home Version One</a></li>
                                <li><a href="index-2.html">Home Version Two</a></li>
                                <li><a href="index-3.html">Home Version Three</a></li>
                                <li><a href="index-4.html">Home Version Four</a></li>
                                <li><a href="index-5.html">Home Version Five</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Company</a>
                            <ul class="dropdown-menu">
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
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Services</a>
                            <ul class="dropdown-menu">
                                <li><a href="services.html">Services Version One</a></li>
                                <li><a href="services-2.html">Services Version Two</a></li>
                                <li><a href="services-3.html">Services Version Three</a></li>
                                <li><a href="services-4.html">Services Version Four</a></li>
                            </ul>
                        </li>
                        <li><a href="case-studies.html">Case Studies</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                            <ul class="dropdown-menu">
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

                <div class="attr-right">
                    
                    <div class="attr-nav">
                        <ul>
                            <li class="side-menu">
                                <a href="#">
                                    <span class="bar-1"></span>
                                    <span class="bar-2"></span>
                                    <span class="bar-3"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>


             
                <div class="side">
                    <a href="#" class="close-side"><i class="fas fa-times"></i></a>
                    <div class="widget">
                        <div class="logo">
                            <img src="assets/img/logo-light.png" alt="Logo"/>
                        </div>
                        <p>
                            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
                        </p>
                    </div>
                    <div class="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div class="content">
                                        <p>Address</p> 
                                        <strong>California, TX 70240</strong>
                                    </div>
                                </li>
                                <li>
                                    <div class="content">
                                        <p>Email</p> 
                                        <strong>support@validtheme.com</strong>
                                    </div>
                                </li>
                                <li>
                                    <div class="content">
                                        <p>Contact</p> 
                                        <strong>+44-20-7328-4499</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget newsletter">
                        <h4 class="title">Get Subscribed!</h4>
                        <form action="#">
                            <div class="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" class="form-control" name="email"/>
                                <span class="input-group-addon">
                                    <button type="submit">
                                        <i class="fas fa-long-arrow-right"></i>
                                    </button>  
                                </span>
                            </div>
                        </form>
                    </div>
                    <div class="widget social">
                        <ul class="link">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                        </ul>
                    </div>

                </div>
             

            </div>  

           
            <div class="overlay-screen"></div>
           

        </nav>
    </header>
  );
}


export default Header;
