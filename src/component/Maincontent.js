import React from 'react';


import Mainbanner from './yys/Mainbanner';
import Collabobanner from './yys/Collabobanner';
import Sustainability from './jjh/Sustainability';
import Review from './gms/Review';
import Store from './jjh/Store';
import Recipe from './yjy/Recipe';
import Map from './pyj/map/Map';
import Eventbanner from './yys/Eventbanner';
import Form from './pyj/form/Form';

function Maincontent() {
    return (
        <>
            <Mainbanner />
            <Collabobanner />
            <Sustainability />
            <Review />
            <Store />
            <Recipe />
            <Map />
            <Eventbanner />
            <Form />
         </>
      
    );
}

export default Maincontent;

