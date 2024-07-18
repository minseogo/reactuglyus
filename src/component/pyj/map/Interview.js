import { useState } from 'react';
import usdata from '../../../data/data.json'


function Interview() {
    const { mapinfo } = usdata.map_pyj;
    const [ targetnum, targetSet ] = useState(0);

    const imageSrc = `.${usdata.map_pyj.dir}${mapinfo[targetnum]["proimgnm"]}.${mapinfo[targetnum]["proimgfile"]}`
    const altText = mapinfo[targetnum]["pronm"];
    const protitleArray = mapinfo[targetnum].protitle.split('|');
    const interviewtext = mapinfo[targetnum].protext;
 
    return (
        <div className='d-flex flex-lg-column flex-wrap'>
            <>
                <div className='col-lg-12 col-6'>
                    <img className='mapimg border-radius text_blank_pyj img-fluid' src={imageSrc} alt={`${mapinfo[targetnum]["pronm"]} 생산자님`}/>
                </div>
                <div className='col-lg-12 col-6 ps-3 ps-lg-0 d-flex flex-column justify-content-between'>
                    <p className='font_subtitle_pyj text_blank_pyj'>
                        {
                            protitleArray.map((v , i)=>{
                                return (
                                        // <>
                                        //     { i === 0 && v + ' '}
                                        //     { i === 1 && <span className="d-block d-xxl-inline">{v}</span> }
                                        //     { i === 2 && <span className="d-block">{v}</span> }
                                        // </>   
                                        i === 0 ? `${v} ` :  i === 1 ? <span key={`pro${i}`} className="d-block d-xxl-inline">{v}</span> : <span key={`pro${i}`} className="d-block">{v}</span>
                                    )
                                })                         
                                                                    
                        }
                    </p>
                    <p className="font_leadcopy_pyj text_blank_pyj">{altText}님의 이야기</p>
                    <p className="font_text text_blank_pyj">
                        <span className="d-none d-lg-inline">{interviewtext}</span>
                        <span className="font_text_pyj mt-auto d-flex d-lg-none justify-content-end">+ 더보기</span>
                    </p>

                    <div className="d-none d-lg-flex justify-content-start align-items-center">
                        <button type="button" className="font_button mapbuttonstyle_pyj"><a href="#">구매하러가기</a></button>
                    </div>
                    <div className="d-flex d-lg-none my-3 justify-content-center align-items-center w-100">
                        <button type="button" className="font_button mapbuttonstyle_pyj"><a href="#">구매하러가기</a></button>
                    </div>
                </div>
            </> 
        </div>
    )
}

export default Interview
