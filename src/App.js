import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/yys/Header';
import Footer from './component/yjy/Footer';
import Quickmenu from './component/pyj/quick/Quickmenu';
 import Maincontent from './component/Maincontent';

function App() {
    return (
        <>
            <Header cls="fixed-top" />
            <Routes>
                <Route path='/' element={<Maincontent />}></Route>
            </Routes>            
            <Maincontent />
            <Footer /> 
            <Quickmenu />
        </>
    );
}

export default App;
