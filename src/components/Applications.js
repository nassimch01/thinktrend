import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Applications() {
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

                    </div>
                </div>
            </div>


            <div className="breadcrumb-area bg-gradient text-center">

                <div className="fixed-bg" style={{ backgroundImage: "url('assets/img/shape/bg-4.png')" }}></div>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Applications</h1>
                            <ul className="breadcrumb">
                                <Link to="/"><i className="fas fa-home"></i>home </Link>

                                <li className="active">Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Applications;