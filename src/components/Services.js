import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function Services() {
    const [shift, setShift] = useState(0);

    // number of items * item width (including marginRight)
    const itemWidth = 411; // 381 + 30 margin
    const totalItems = 10; // adjust based on your content
    const visibleItems = 3; // how many are visible at once
    const maxShift = -(itemWidth * (totalItems - visibleItems));

    useEffect(() => {
        const interval = setInterval(() => {
            setShift((prev) => {
                const next = prev - itemWidth;
                return next < maxShift ? 0 : next; // reset to start if reached end
            });
        }, 5000); // every 60s

        return () => clearInterval(interval);
    }, []);

    return (
        <div>


            < Header />
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
                            <h1>Our Services</h1>
                            <ul className="breadcrumb">
                                <Link to="/"><i className="fas fa-home"></i>home </Link>

                                <li className="active">Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="services-area carousel-shadow bg-gray default-padding">

                <div className="shape-bottom">
                    <img src="assets/img/shape/1.svg" alt="Shape" />
                </div>

                <div className="container">
                    <div
                        className='services-items wow fadeInUp services-stage-carousel owl-carousel owl-theme text-center owl-loaded owl-drag'
                    >
                        <div className='owl-stage-outer'>
                            <div
                                className='owl-stage'
                                style={{
                                    transform: `translate3d(${shift}px, 0px, 0px)`,
                                    transition: "transform 0.75s ease", // smooth slide
                                    width: '4725px',
                                    paddingLeft: '100px',
                                    paddingRight: '100px',
                                }}
                            >
                                <div
                                    className='owl-item cloned'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-marketing'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>
                                                    Content Marketing
                                                </a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item cloned'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-ppc'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>PPC Advertising</a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item cloned'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-competition'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>
                                                    Competitor Research
                                                </a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item active'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-bullhorn'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>
                                                    Social Media Marketing
                                                </a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item active'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-keyword-1'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>Keyward Research</a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item active'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-marketing'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>
                                                    Content Marketing
                                                </a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-ppc'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>PPC Advertising</a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-competition'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>
                                                    Competitor Research
                                                </a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item cloned'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-bullhorn'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>
                                                    Social Media Marketing
                                                </a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item cloned'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-keyword-1'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>Keyward Research</a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='owl-item cloned'
                                    style={{
                                        width: '381.333px',
                                        marginRight: '30px',
                                    }}
                                >
                                    <div className='item'>
                                        <div className='icon'>
                                            <i className='flaticon-marketing'></i>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <a href='#'>
                                                    Content Marketing
                                                </a>
                                            </h4>
                                            <p>
                                                Except had sex limits county
                                                enough the figure former add. Do
                                                sang my he next mr soon. It
                                                merely waited do unable.
                                            </p>
                                            <a href='#'>
                                                <i className='fas fa-arrow-right'></i>{' '}
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='owl-nav disabled'>
                            <button
                                type='button'
                                role='presentation'
                                className='owl-prev'
                            >
                                <i className='fa fa-angle-left'></i>
                            </button>
                            <button
                                type='button'
                                role='presentation'
                                className='owl-next'
                            >
                                <i className='fa fa-angle-right'></i>
                            </button>
                        </div>
                        <div className='owl-dots'>
                            <button role='button' className='owl-dot active' onClick={() => setShift(shift - 400)}>
                                <span></span>
                            </button>
                            <button role='button' className='owl-dot' onClick={() => setShift(shift + 400)}>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="fun-factor-area relative">
                <div className="container">
                    <div className="client-items text-center">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="timer" data-to="687" data-speed="5000">687</div>
                                    <span className="medium">Projects Executed</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="timer" data-to="2348" data-speed="5000">2348</div>
                                    <span className="medium">Data Analytics</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="timer" data-to="450" data-speed="5000">450</div>
                                    <span className="medium">Data Management</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="timer" data-to="1200" data-speed="5000">1200</div>
                                    <span className="medium">Satisfied Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="choose-us-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 thumb wow fadeInLeft">
                            <img src="assets/img/illustration/7.png" alt="Thumb" />
                        </div>
                        <div className="col-lg-6 info wow fadeInRight">
                            <h2 className="title">We Offer Full Range of <br /> <strong>Digital Marketing</strong></h2>
                            <p>
                                Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical.
                            </p>
                            <ul>
                                <li>
                                    <h5>Global Reach</h5>
                                    <p>
                                        Upto 100%
                                    </p>
                                </li>
                                <li>
                                    <h5>Big Experience</h5>
                                    <p>
                                        Expert worker
                                    </p>
                                </li>
                                <li>
                                    <h5>Convenience</h5>
                                    <p>
                                        To reach your target
                                    </p>
                                </li>
                                <li>
                                    <h5>Team Strength</h5>
                                    <p>
                                        Clients satisfaction
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing-area default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5>Our Pricing</h5>
                                <h2>Take a look of our Pricing and <br /> Select Your Choice</h2>
                                <div className="heading-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-items wow fadeInUp text-center">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="pricing-item">
                                        <ul>
                                            <li className="pricing-header">
                                                <h4>Trial Version</h4>
                                            </li>
                                            <li className="price">
                                                <h2>Free</h2>
                                            </li>
                                            <li className="icon">
                                                <i className="flaticon-start"></i>
                                            </li>
                                            <li>10 Keywords Optimized  <i className="fas fa-check-circle"></i></li>
                                            <li>3 Top 10 Ranking  <i className="fas fa-times-circle"></i></li>
                                            <li>Web site Analysis  <i className="fas fa-times-circle"></i></li>
                                            <li>Keyword Research  <i className="fas fa-check-circle"></i></li>
                                            <li>Content Optimization  <i className="fas fa-check-circle"></i></li>
                                            <li>Data Controll  <i className="fas fa-times-circle"></i></li>
                                            <li className="footer">
                                                <a className="btn circle btn-dark border btn-sm" href="#">Try for free</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="pricing-item active">
                                        <ul>
                                            <li className="pricing-header">
                                                <h4>Regular</h4>
                                            </li>
                                            <li className="price">
                                                <h2><sup>Dt</sup>30 <sub>/ Mo-Ht</sub></h2>
                                            </li>
                                            <li className="icon">
                                                <i className="flaticon-quality-badge"></i>
                                            </li>
                                            <li>12 Keywords Optimized  <i className="fas fa-check-circle"></i></li>
                                            <li>6 Top 10 Ranking  <i className="fas fa-check-circle"></i></li>
                                            <li>Web site Analysis  <i className="fas fa-times-circle"></i></li>
                                            <li>Keyword Research  <i className="fas fa-check-circle"></i></li>
                                            <li>Content Optimization  <i className="fas fa-check-circle"></i></li>
                                            <li>Data Controll  <i className="fas fa-times-circle"></i></li>
                                            <li className="footer">
                                                <a className="btn circle btn-theme effect btn-sm" href="#">Get Started</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 single-item">
                                    <div className="pricing-item">
                                        <ul>
                                            <li className="pricing-header">
                                                <h4>Extended</h4>
                                            </li>
                                            <li className="price">
                                                <h2><sup>$</sup>59 <sub>/ Mo</sub></h2>
                                            </li>
                                            <li className="icon">
                                                <i className="flaticon-value"></i>
                                            </li>
                                            <li>16 Keywords Optimized  <i className="fas fa-check-circle"></i></li>
                                            <li>8 Top 10 Ranking  <i className="fas fa-check-circle"></i></li>
                                            <li>Web site Analysis  <i className="fas fa-times-circle"></i></li>
                                            <li>Keyword Research  <i className="fas fa-check-circle"></i></li>
                                            <li>Content Optimization  <i className="fas fa-check-circle"></i></li>
                                            <li>Data Controll  <i className="fas fa-check-circle"></i></li>
                                            <li className="footer">
                                                <a className="btn circle btn-dark border btn-sm" href="#">Get Started</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>






    )
}

export default Services;