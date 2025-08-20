import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import ServicesArea from './ServicesArea'
import CaseStudies from './CaseStudies'
import Contact from './Contact'

function Home() {
    return (
        <div>
            <Banner />
            <AboutUs />
            <ServicesArea />
            <CaseStudies />
            <Contact />
        </div>
    )
}

export default Home;