import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light">
                <div className="svg-shape">
                    <svg xmlns="http://www.w3.org/2000/svg" className="light" preserveAspectRatio="none" viewBox="0 0 1070 52">
                        <path d="M0,0S247,91,505,32c261.17-59.72,565-13,565-13V0Z"></path>
                    </svg>
                </div>
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
                                                    <span>info.thinktrend@gmail.com</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-call"></i>
                                                </div>
                                                <div className="info">
                                                    <h5>Phone:</h5>
                                                    <span>+216 90-412-026<br />+216 28-804-890</span>
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

export default Footer;