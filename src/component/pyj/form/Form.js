import Formbox from './Formbox'
import Formboxhook from './Formboxhook'

function Form() {
    return (
        <section id="form_pyj" className="contents_background_pyj">
            <div className="container section_top_blank_pyj">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 me-lg-auto">
                        <div className="mb-lg-0 mb-4 text-center">
                            <h2 className="font_title_k_pyj title_blank">생산자님! 
                                <span className="form_title_pyj"> 구출이 필요한 농산물이 있나요?</span>
                            </h2>
                            <p className="font_text mb-0">구출이 필요한 농산물이 있다면 정보 확인 후 
                                <span className="form_text_pyj"> 연락 드리겠습니다.</span>
                            </p>
                            <p className="font_text mb-0 d-none d-lg-block">회신까지 2~3일 정도 소요될 수 있으며, 최대한 빠르게 연락 드릴 수 있도록 하겠습니다.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                        <div className="form_background_pyj p-lg-5 p-3">
                            <h2 className="formfont_subtitle_pyj text-center mb-lg-5 mb-4">농산물 납품 문의</h2>
                            {/* <Formbox></Formbox> */}
                            <Formboxhook></Formboxhook>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
