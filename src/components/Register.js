import React from 'react'

function Register() {
    return (
        <div>
            <div className="login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="login-box">
                                <div className="login">
                                    <div className="content">
                                        <a href="index.html"><img src="assets/img/logo.png" alt="Logo" /></a>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <i className="fas fa-user"></i> <input className="form-control" placeholder="Name*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <i className="fas fa-envelope-open"></i> <input className="form-control" placeholder="Email*" type="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <i className="fas fa-lock"></i> <input className="form-control" placeholder="Password*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <i className="fas fa-lock"></i> <input className="form-control" placeholder="Confirm Password*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="row">
                                                    <button type="submit">
                                                        Login
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="sign-up">
                                            <p>
                                                Already have an account?? <a href="login.html">Login Now</a>
                                            </p>
                                        </div>
                                        <div className="social-login">
                                            <h5>Or Register With</h5>
                                            <ul>
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="g-plus">
                                                    <a href="#">
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;