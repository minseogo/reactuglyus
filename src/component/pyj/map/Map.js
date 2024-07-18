import React, { useState } from 'react';
import Interview from './Interview';
import Kakaomap from './Kakaomap';
import { Title, Leadcopy } from '../../style/commonui';

function Map() {
    const [targetnum, setTargetNum] = useState(0);

    return (
        <section id="map_pyj">
            <div className='text-center'>
                <Title $title="map title" className='title_blank'>Ugly Us Map</Title>
                <Leadcopy $leadcopy="map leadcopy" className='title_blank'>여러분이 구해준 채소 한 알, 어디서 왔을까요?</Leadcopy>
            </div>

            <div className='mx-3 pb-5'>
                <div className='d-flex flex-wrap justify-content-between container'>
                    <div className='col-lg-9 col-12'>
                        <Kakaomap setTargetNum={setTargetNum} />
                        <span className='position-absolute w-0 h-0 d-block overflow-hidden opacity-0'>지도</span>
                    </div>

                    <div className='col-lg-3 col-12 d-flex flex-column justify-content-between align-items-start ps-lg-3 mt-3 mt-lg-0'>
                        <Interview targetnum={targetnum} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;

