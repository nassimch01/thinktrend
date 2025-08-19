import React from 'react'
import { Link } from 'react-router-dom';

function AboutCompany() {
    return (
        <div>
            <div id="site-preloader" className="site-preloader">
                <div className="loader-wrap">
                    <div className="ring">
                        <span></span>
                    </div>
                    <h2>Thinktrend</h2>
                </div>
            </div>
            <div className="top-bar-area bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8 address-info">
                            <div className="info box">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> California, TX 70240
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope-open"></i> Info@gmail.com
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i> +123 456 7890
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 text-end button">
                            <div className="item-flex">
                                <a className="button" href="#"><i className="fas fa-chart-line"></i> Free Analysis</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header>

                <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs dark">

                    <div className="container d-flex justify-content-between align-items-center">



                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" className="logo logo-display" alt="Logo" />
                            </a>
                        </div>



                        <div className="collapse navbar-collapse" id="navbar-menu">

                            <div className="collapse-header">
                                <img src="assets/img/logo.png" alt="Logo" />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>

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
                                        <li><Link to="/about-company">A propos de nous </Link></li>
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
                                    <li className="contact">
                                        <div className="call">
                                            <div className="icon">
                                                <i className="fas fa-comments-alt-dollar"></i>
                                            </div>
                                            <div className="info">
                                                <p>Have any Questions?</p>
                                                <h5><a href="mailto:info@crysta.com">info@bestup.com</a></h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="overlay-screen"></div>

                </nav>

            </header>



            <div className="breadcrumb-area bg-gradient text-center">

                <div className="fixed-bg" style={{ backgroundImage: "url('assets/img/shape/bg-4.png')" }}></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>About Us</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li className="active">About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-area default-padding">
                <div className="container">
                    <div className="about-items">
                        <div className="row align-center">
                            <div className="col-lg-6 thumb wow fadeInUp">
                                <img src="assets/img/illustration/14.png" alt="Thumb" />
                            </div>
                            <div className="col-lg-6 info wow fadeInLeft">
                                <h5>About Us</h5>
                                <h2 className="title">An award winning <br /> <strong>Digital Marketing agency</strong></h2>
                                <p>
                                    Agreed but expect repair she nay sir silent person. Direction can dependent one bed situation attempted. His she are man their spite avoid. Her pretended fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are.
                                </p>
                                <div className="progress-items">
                                    <div className="progress-box">
                                        <h5>Search Engine Optimization <span className="float-right">88%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" data-width="87"></div>
                                        </div>
                                    </div>
                                    <div className="progress-box">
                                        <h5>Marketing Analysis <span className="float-right">70%</span></h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" data-width="52"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="our-process-area default-padding-bottom bottom-less">
                <div className="container">
                    <div className="process-box text-center">
                        <div className="row">

                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="500ms">
                                    <div className="icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h4>Research</h4>
                                    <p>
                                        Welcome fat who window. Removing welcomed civility or hastened.
                                    </p>
                                </div>
                            </div>


                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="600ms">
                                    <div className="icon">
                                        <i className="fas fa-hdd"></i>
                                    </div>
                                    <h4>Data Collection</h4>
                                    <p>
                                        Welcome fat who window. Removing welcomed civility or hastened.
                                    </p>
                                </div>
                            </div>


                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="700ms">
                                    <div className="icon">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h4>Targeting</h4>
                                    <p>
                                        Welcome fat who window. Removing welcomed civility or hastened.
                                    </p>
                                </div>
                            </div>


                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="800ms">
                                    <div className="icon">
                                        <i className="fas fa-list-alt"></i>
                                    </div>
                                    <h4>Result</h4>
                                    <p>
                                        Welcome fat who window. Removing welcomed civility or hastened.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




            <div className="clients-area bg-gray default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5 info">
                            <h2>We've Worked With Them, <strong> Now Trust Each</strong> Other</h2>
                        </div>
                        <div className="col-lg-7">
                            <div className="clients-carousel owl-carousel owl-theme">
                                <div className="item">
                                    <img src="assets/img/clients/1.png" alt="Thumb" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/clients/2.png" alt="Thumb" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/clients/3.png" alt="Thumb" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/clients/4.png" alt="Thumb" />
                                </div>
                                <div className="item">
                                    <img src="assets/img/clients/5.png" alt="Thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="choose-us-area default-padding-bottom bg-gray">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 thumb wow fadeInRight">
                            <img src="assets/img/illustration/7.png" alt="Thumb" />
                        </div>
                        <div className="col-lg-6 info wow fadeInUp">
                            <h2 className="title">We Offer Full Range of <br /> <strong>Digital Marketing</strong></h2>
                            <p>
                                Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at.
                            </p>
                            <p>
                                Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence.
                            </p>
                            <a className="btn circle btn-md btn-gradient">Start a Project</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5>Our Team</h5>
                                <h2>
                                    Meet our professional & Expert <br />Team Members
                                </h2>
                                <div className="heading-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className="team-items text-center">
                        <div className="row">

                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="500ms">
                                    <div className="thumb">
                                        <img src="assets/img/team/1.jpg" alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <span>Senior Marketer</span>
                                        <h4>Jonathom Ahem</h4>
                                        <div className="contact">
                                            <i className="fab fa-twitter"></i>
                                            <a href="#">twitter.com/digilab46</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="600ms">
                                    <div className="thumb">
                                        <img src="assets/img/team/2.jpg" alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <span>Sales Manager</span>
                                        <h4>Donald Busri</h4>
                                        <div className="contact">
                                            <i className="fab fa-twitter"></i>
                                            <a href="#">twitter.com/digilab46</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="700ms">
                                    <div className="thumb">
                                        <img src="assets/img/team/3.jpg" alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <span>Data Analyst</span>
                                        <h4>Sami Adham</h4>
                                        <div className="contact">
                                            <i className="fab fa-twitter"></i>
                                            <a href="#">twitter.com/digilab46</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-item col-lg-3 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="800ms">
                                    <div className="thumb">
                                        <img src="assets/img/team/4.jpg" alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <span>Managing Director</span>
                                        <h4>Munns Tenul</h4>
                                        <div className="contact">
                                            <i className="fab fa-twitter"></i>
                                            <a href="#">twitter.com/digilab46</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 item">
                                <div className="f-item about">
                                    <img src="assets/img/logo-light.png" alt="Logo" />
                                    <div className="address">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-email"></i>
                                                </div>
                                                <div className="info">
                                                    <h5>Email:</h5>
                                                    <span>support@validtemplates.com</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-call"></i>
                                                </div>
                                                <div className="info">
                                                    <h5>Phone:</h5>
                                                    <span>+44-20-7328-4499</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">About us</a>
                                        </li>
                                        <li>
                                            <a href="#">Compnay History</a>
                                        </li>
                                        <li>
                                            <a href="#">Features</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog Page</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Useful Link</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Career</a>
                                        </li>
                                        <li>
                                            <a href="#">Leadership</a>
                                        </li>
                                        <li>
                                            <a href="#">Strategy</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">History</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 item">
                                <div className="f-item recent-post">
                                    <h4 className="widget-title">Latest News</h4>
                                    <div className="item">
                                        <a href="#">Delighted prevailed supported too not remainder perpetual who furnished.</a>
                                        <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2025 -  <a href="#">Admin</a></span>
                                    </div>
                                    <div className="item">
                                        <a href="#">Speaking trifling an to unpacked moderate debating learnin management. </a>
                                        <span><i className="fas fa-calendar-alt"></i> 15 Nov, 2025 -  <a href="#">User</a></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Copyright &copy;  2025. Designed by <a href="#">validtemplatess</a></p>
                            </div>
                            <div className="col-md-6 text-end link">
                                <ul>
                                    <li>
                                        <a href="#">Terms</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>





        </div>
    )
}

export default AboutCompany;