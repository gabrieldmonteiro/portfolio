import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainContent from './pages/MainContent';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {    
    return (        
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <MainContent/> }/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>           
            
        </div>
    );
}

export default App;
