import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import CaseStudies from './components/CaseStudies';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import ServicesArea from './components/ServicesArea';
import StartFaq from './components/StartFaq';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <ServicesArea />
      <StartFaq />
      <CaseStudies />
      <ContactUs />
      < Footer />
    </div>
  );
}

export default App;
