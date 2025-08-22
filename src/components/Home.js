import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import ServicesArea from './ServicesArea'
import CaseStudies from './CaseStudies'
import ContactUs from './ContactUs'
import Header from './Header'
import Footer from './Footer'
import StartFacts from './StartFacts'


function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <AboutUs />
            <ServicesArea />
            <StartFacts />
            <CaseStudies />
            <ContactUs />
            <Footer />

        </div>
    )
}

export default Home;