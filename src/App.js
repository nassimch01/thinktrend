import { Route, Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import CaseStudies from './components/CaseStudies';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import ServicesArea from './components/ServicesArea';
import StartFacts from './components/StartFacts';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutCompany from './components/AboutCompany';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-company" element={<AboutCompany />} />

      </Routes>
      <Banner />
      <AboutUs />
      <ServicesArea />
      <StartFacts />
      <CaseStudies />
      <ContactUs />
      <Footer />


    </div>
  );
}

export default App;
