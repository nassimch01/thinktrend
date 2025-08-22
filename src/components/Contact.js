import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Contact() {
    return (
        <div>

            <Header />

            <div className="top-bar-area bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8 address-info">
                            <div className="info box">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> Nabeul, Dar Chaabane Elfehri, 8011
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope-open"></i> info.thinktrend@gmail.com
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i> +216 90-412-026
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




            <div className="breadcrumb-area bg-gradient text-center">

                <div className="fixed-bg" style={{ backgroundImage: "url('assets/img/shape/bg-4.png')" }}></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Contact Us</h1>
                            <ul className="breadcrumb">
                                <Link to="/"><i className="fas fa-home"></i>home </Link>

                                <li className="active">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div id="contact" className="contact-us-area default-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 wow fadeInUp address text-light">
                            <div className="address-items">
                                <div className="item">
                                    <h4>Office Location</h4>
                                    <div className="info">
                                        <p>22 Baker Street,<br /> London, United Kingdom,<br /> W1U 3BW</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <h4>Contact Info</h4>
                                    <div className="info">
                                        <ul>
                                            <li>Phone: <span>+44-20-7328-4499</span></li>
                                            <li>Fax: <span>+44-20-7328-4499</span></li>
                                            <li>Email: <span>info@digilab.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 wow fadeInLeft contact-form">
                            <h2 className="title">Need help? <strong>Let's ask your questions</strong></h2>
                            <form action="assets/mail/contact.php" method="POST" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" id="submit">
                                            Send Message <i className="fa fa-paper-plane"></i>
                                        </button>
                                    </div>

                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg"></div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="maps-area">
                <div className="google-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.0385652687896!2d10.752171274614232!3d36.456624286993595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130299b2ce11e99b%3A0x90144e76cef169e5!2sThink%20Trend!5e0!3m2!1sfr!2stn!4v1755769336666!5m2!1sfr!2stn"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Contact;