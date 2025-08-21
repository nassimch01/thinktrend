import React from 'react'

function ContactUs() {
    return (
        <div>
            <div id="contact" className="contact-us-area default-padding-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 address text-light">
                            <div className="address-items wow fadeInUp">
                                <div className="item">
                                    <h4>Adresse</h4>
                                    <div className="info">
                                        <p>Rue de Sousse, Dar Chaabane Elfehri <br />Nabeul, Tunisia,  <br />8011 </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <h4>Contact Info</h4>
                                    <div className="info">
                                        <ul>
                                            <li>Phone: <span>+216 90-412-026</span></li>

                                            <li>Email: <span>info.thinktrend@gmail.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 contact-form wow fadeInLeft">
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
        </div>
    )
}

export default ContactUs;