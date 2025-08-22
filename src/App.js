import { Route, Router, Routes } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutCompany from './components/AboutCompany';
import Home from './components/Home';
import Process from './components/Process';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Partenaires from './components/Partenaires';
import Applications from './components/Applications';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/process" element={<Process />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/applications" element={<Applications />} />


      </Routes>



    </div>
  );
}

export default App;
