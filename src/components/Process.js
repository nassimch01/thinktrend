import React from 'react'
import { Link } from 'react-router-dom';

function Process() {
    return (
        <div>




            <div className="breadcrumb-area bg-gradient text-center">

                <div className="fixed-bg" style={{ backgroundImage: "url('assets/img/shape/bg-4.png')" }}></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Our Process</h1>
                            <ul className="breadcrumb">
                                <Link to="/"><i className="fas fa-home"></i>home </Link>
                                <li className="active">Process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs-content-area default-padding">
                <div className="container">
                    <div className="center-tabs">
                        <div className="row">
                            <div className="col-lg-4">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            Our Mission
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            Our Vission
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                            Success Rate
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content wow fadeInUp" data-wow-delay="0.5s" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row align-center">
                                            <div className="col-lg-12 info">
                                                <h5>Our Mission</h5>
                                                <h2>Data Visualization Research <br /> technique & Solution</h2>
                                                <p>
                                                    Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                                                </p>
                                                <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row align-center">
                                            <div className="col-lg-12 info">
                                                <h5>Our Vission</h5>
                                                <h3>Collect Ongoing Big Data <br /> Design And Strategy</h3>
                                                <p>
                                                    Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                                                </p>
                                                <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="row align-center">
                                            <div className="col-lg-12 info">
                                                <h5>Success Rate</h5>
                                                <h2>These entrepreneurs feel <br /> bright and full of hope. </h2>
                                                <p>
                                                    Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                                                </p>
                                                <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="process-area default-padding-bottom">

                <div className="shape-left-top shape opacity-default">
                    <img src="assets/img/shape/4.png" alt="Shape" />
                </div>

                <div className="container">
                    <div className="process-items">
                        <div className="row align-center">

                            <div className="col-lg-6 thumb wow fadeInLeft">
                                <img src="assets/img/illustration/3.png" alt="Thumb" />
                            </div>

                            <div className="col-lg-6 info wow fadeInUp">
                                <h2>We love What we Do  <strong>And Helping others Succeed</strong></h2>
                                <div className="content">
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                        <h4><strong>01.</strong> Research</h4>
                                        <p>
                                            Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense.
                                        </p>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                        <h4><strong>02.</strong> Data Collection</h4>
                                        <p>
                                            Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense.
                                        </p>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                        <h4><strong>03.</strong> Targeting</h4>
                                        <p>
                                            Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense.
                                        </p>
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

export default Process;
