import React from 'react';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages1/Home';
import About from './Pages1/About';
import Services from './Pages1/Services';
import Internship from './Pages1/Internship';
import Contact from './Pages1/Contact';
import Webdesign from './Pages1/Webdesign';
import Ecommerce from './Pages1/Ecommerce';
import SearchEngine from './Pages1/SearchEngine';
import Mediamarketing from './Pages1/Mediamarketing';
import BusinessIntelligence from './Pages1/BusinessIntelligence';
import Desktop from './Pages1/Desktop';

const App = () => {
  return (
   
    
    <div>
      <BrowserRouter>
    

        <Routes>
            
            <Route path="/" element={<Home/>} exact/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/internship" element={<Internship/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/webdesign" element={<Webdesign/>}/>
            <Route path="/ecommerce" element={<Ecommerce/>}/>
            <Route path="/seo" element={<SearchEngine/>}/>
            <Route path="/smm" element={<Mediamarketing/>}/>
            <Route path="/businessintelligence" element={<BusinessIntelligence/>}/>
            <Route path='/desktop' element={<Desktop/>}/>
            

        </Routes>
        
     </BrowserRouter>
    </div>
  );
}

export default App;


