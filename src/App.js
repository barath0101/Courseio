import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TermsAndConditions from './pages/TermsAndConditions';
import About from './pages/About';
import Contact from './pages/ContactUs';
import DataScience from './pages/DataScience';
import Business from './pages/Business';
import PersonalDevelopment from './pages/PersonalDevelopment';


import './App.css';

import EnrollPage from './pages/EnrollMOA';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';
import Engineering from './pages/Engineering';
import Arts from './pages/Arts';
import Architect from './pages/Architect';
import Navbar from './components/Navbar';
import BCA from './pages/BCA';
import BachelorOfCommerce from './pages/BachelorOfCommerce';
import BscMaths from './pages/BscMaths';
import MasterOfCommerce from './pages/MasterOfCommerce';
import Profession from './components/Profession';
import BachelorofArchitect from './pages/BachelorofArchitect';
import BuildingTechnology from './pages/BuildingTechnology';
import MasterofArchitect from './pages/MasterofArchitect';
import EnrollDS from './pages/EnrollDS';
import Enrolliot from './pages/Enrolliot';
import EnrollCS from './pages/EnrollCS';
import EnrollBCA from './pages/EnrollBCA';
import EnrollBSC from './pages/EnrollBSC';
import EnrollMOC from './pages/EnrollMOC';

import EnrollBT from './pages/EnrollBT';
import EnrollMOA from './pages/EnrollMOA';
import AdminPage from './pages/AdminDashboard';
import EnrollBOA from './pages/EnrollBOA';
import AddCourse from './pages/AddCourse';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/iot" element={<Business/>} />
        <Route path="/engineer" element={<Engineering/>} />
        <Route path="/arts" element={<Arts/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/bachelor-of-computer-application" element={<BCA/>} />
        <Route path="/master-of-commerce" element={<MasterOfCommerce/>} />
        <Route path="/bsc-maths" element={<BscMaths/>} />
        <Route path="/profession" element={<Profession/>} />
        <Route path="/arch" element={<Architect/>} />
        <Route path="/bachelor-of-architecture" element={<BachelorofArchitect/>} />
        <Route path="/building-technology" element={<BuildingTechnology/>} />
        <Route path="/master-of-architecture" element={<MasterofArchitect/>} />  
        <Route path="/cybersecurity" element={<PersonalDevelopment />} />
        <Route path="/admin" element={<AdminPage />} />
        
        
        <Route path="/footer" element={<Footer/>} />
        
        <Route path="/add-course" element={<AddCourse />} />

        <Route path="/enroll-cs" element={<EnrollCS />} />
        <Route path="/enroll-master-of-architecture" element={<EnrollMOA/>} />
        <Route path="/enroll-building-technology" element={<EnrollBT />} />
        <Route path="/enroll-bachelor-of-architect" element={<EnrollBOA />} />
        <Route path="/enroll-iot" element={<Enrolliot />} />
        <Route path="/enroll-datascience" element={<EnrollDS />} />
        <Route path="/enroll-bachelor-of-computer-application" element={<EnrollBCA />} />
        <Route path="/enroll-bsc-maths" element={<EnrollBSC />} /> 
        <Route path="/enroll-master-of-commerce" element={<EnrollMOC />} />
        <Route path="/enroll-bachelor-commerce" element={<EnrollPage />} />
        
        
        
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
