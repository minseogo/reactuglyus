function Quickitem() {
    const menuItems = [
        { quickhref: '#', quickSrc: '/image/img_pyj/quick/mypage.svg', quickAlt: '마이페이지', quicktext: '마이페이지' },
        { quickhref: '#', quickSrc: '/image/img_pyj/quick/market.svg', quickAlt: '싱싱마켓', quicktext: '싱싱마켓' },
        { quickhref: '#', quickSrc: '/image/img_pyj/quick/event.svg', quickAlt: '이벤트', quicktext: '이벤트' },
        { quickhref: '#', quickSrc: '/image/img_pyj/quick/service.svg', quickAlt: '고객센터', quicktext: '고객센터' }
    ];
    return (
        <>
            {
                menuItems.map((v, idx)=>{
                    return(
                        <li>
                            <a href={v.quickhref}>
                                <img src={v.quickSrc} alt={v.quickAlt} />
                                <span className='font_button_pyj'>{v.quicktext}</span>
                            </a>
                        </li>
                    )
                })
            } 
        </> 
    )
}

export default Quickitem
