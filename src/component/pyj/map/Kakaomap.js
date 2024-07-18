import React, { useEffect } from 'react';
import mapData from '../../../data/data.json';

const { kakao } = window;

function Kakaomap({ setTargetNum }) {
    useEffect(() => {
        const container = document.getElementById('kakaomap');
        const options = {
            center: new kakao.maps.LatLng(35.5665, 128.1654),
            level: 13
        };

        const map = new kakao.maps.Map(container, options);

        const imageSrc = `${mapData.map_pyj.dir}mapmarker.svg`,
              imageSize = new kakao.maps.Size(43, 48),
              imageOption = { offset: new kakao.maps.Point(21.5, 24) };

        mapData.map_pyj.mapinfo.forEach((location, index) => {
            const [lat, lng] = location.location.split('|').map(Number);
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(lat, lng),
                title: location.title,
                image: markerImage
            });

            kakao.maps.event.addListener(marker, 'click', () => {
                console.log(index);
                setTargetNum(index);
            });
        });
    }, [setTargetNum]);

    return (
        <div id="kakaomap" className="w-100 h-100" style={{ height: '500px' }}></div>
    );
}

export default Kakaomap;
