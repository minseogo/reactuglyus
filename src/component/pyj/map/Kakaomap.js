import React, { useEffect } from 'react';

const {kakao} = window;

function Kakaomap() {
    useEffect(()=>{
        var container = document.getElementById('kakaomap')
        var options = {
            center : new kakao.maps.LatLng(33.450701, 126.570667),
            level : 3
        };
    
        var map = new kakao.maps.Map(container, options);
    }, [])

    return (
        <div id="kakaomap" className='w-100 h-100'></div>
    );
}

export default Kakaomap;