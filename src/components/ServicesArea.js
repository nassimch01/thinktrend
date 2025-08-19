import React, { useState, useEffect } from 'react';

function ServicesArea() {

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
            <div className='services-area carousel-shadow default-padding-bottom'>
                <div className='shape-left-bottom shape opacity-default'>
                    <img src='assets/img/shape/4.png' alt='Shape' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 offset-lg-2'>
                            <div className='site-heading text-center'>
                                <h5>What we do</h5>
                                <h2>
                                    Let's Check our scientific Digital <br />
                                    Marketing solutions
                                </h2>
                                <div className='heading-divider'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-lg'>
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
        </div>
    );
}

export default ServicesArea;

