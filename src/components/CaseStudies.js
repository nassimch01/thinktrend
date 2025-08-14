import React from 'react'

function CaseStudies() {
    return (
        <div>
            <div className="case-studies-area circle-shape-right default-padding-bottom bottom-less">
                <div className="shape-left-bottom shape opacity-default">
                    <img src="assets/img/shape/4.png" alt="Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5>Recent Case Studies</h5>
                                <h2>Take a look some of our recent <br /> case studies</h2>
                                <div className="heading-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className="case-items">
                        <div className="row">
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="500ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/1.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="project-details.html"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                Sales, Web
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="project-details.html">Community Engagement</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="600ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/2.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="project-details.html"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                Marketing
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="project-details.html">Income growth</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="700ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/6.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="project-details.html"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                SEO, Optimize
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="project-details.html">Traffic Management</a>
                                        </h5>
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

export default CaseStudies;