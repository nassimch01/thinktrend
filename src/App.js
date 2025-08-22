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


      </Routes>



    </div>
  );
}

export default App;
