import React from 'react'

function StartFacts() {
    return (
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
    )
}

export default StartFacts;