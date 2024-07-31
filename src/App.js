import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/yys/Header';
import Footer from './component/yjy/Footer';
import Quickmenu from './component/pyj/quick/quickmenu';
import Maincontent from './component/Maincontent';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Maincontent />}></Route>
            </Routes>            
            <Footer />
            <Quickmenu />
        </>
    );
}

export default App;
