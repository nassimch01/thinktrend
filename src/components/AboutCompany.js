import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

function AboutCompany() {
    return (
        <div>






            <div className="breadcrumb-area bg-gradient text-center">

                <div className="fixed-bg" style={{ backgroundImage: "url('assets/img/shape/bg-4.png')" }}></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>About Us</h1>
                            <ul className="breadcrumb">
                                <Link to="/"><i className="fas fa-home"></i>home </Link>

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
            <div>
                <div className="faq-area default-padding-bottom">
                    <div className="container">
                        <div className="faq-items">
                            <div className="row align-center">

                                <div className="col-lg-6">
                                    <div className="faq-content wow fadeInUp">
                                        <h2 className="title">We build transform <strong>And businesse strategy</strong></h2>
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item card">
                                                <h4 className="accordion-header" id="accordion_1">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Where can I get analytics help?
                                                    </button>
                                                </h4>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="accordion_1" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias ullam officiis, ex necessitatibus similique odio aut! Provident, adipisci esse vero magni necessitatibus quisquam commodi.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h4 className="accordion-header" id="accordion_2">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        How much does data analytics costs?
                                                    </button>
                                                </h4>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="accordion_2" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias ullam officiis, ex necessitatibus similique odio aut! Provident, adipisci esse vero magni necessitatibus quisquam commodi.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h4 className="accordion-header" id="accordion_3">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                        What kind of data is needed for analysis?
                                                    </button>
                                                </h4>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="accordion_3" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias ullam officiis, ex necessitatibus similique odio aut! Provident, adipisci esse vero magni necessitatibus quisquam commodi.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="thumb wow fadeInLeft" data-wow-delay="0.5s">
                                        <img src="assets/img/illustration/17.png" alt="Thumb" />
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

export default AboutCompany;