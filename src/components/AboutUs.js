import React from 'react'


function AboutUs() {
  return (

    <div className="about-features-area about-area default-padding">

      <div className="container">
        <div className="row align-center">


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
                <h5> Marketing Analysis <span className="float-right">70%</span></h5>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" data-width="52"></div>
                </div>
              </div>

            </div>
          </div>



          <div className="col-lg-6 process-box text-center">
            <div className="row">
              <div className="item-grid col-lg-6 col-md-6">
                <div className="item wow fadeInUp" data-wow-delay="500ms">
                  <div className="icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h4>Research</h4>
                </div>
                <div className="item wow fadeInUp" data-wow-delay="500ms">
                  <div className="icon">
                    <i className="fas fa-hdd"></i>
                  </div>
                  <h4>Data Collection</h4>
                </div>
              </div>
              <div className="item-grid col-lg-6 col-md-6">
                <div className="item wow fadeInUp" data-wow-delay="500ms">
                  <div className="icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h4>Targeting</h4>
                </div>
                <div className="item wow fadeInUp" data-wow-delay="500ms">
                  <div className="icon">
                    <i className="fas fa-list-alt"></i>
                  </div>
                  <h4>Result</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default AboutUs;