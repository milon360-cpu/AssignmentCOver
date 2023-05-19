import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './../Nav/Nav';
import Home from './../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Error from '../Pages/Error/Error';
const Routing = () => {
    return (
        <BrowserRouter>
            {/* <Nav /> */}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
