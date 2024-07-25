import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Forminput from "./Forminput";
import Contactinput from "./Contactinput";

function Formboxhook() {
    const [showPopup, setShowPopup] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showPopup]);

    const onSubmit = (data) => {
        const { agree, ...formData } = data;
        const phoneNumber = `${data.hp[0]}-${data.hp[1]}-${data.hp[2]}`;
        const newformdata = { ...formData, hp: phoneNumber };
        console.log(formData, newformdata);
        
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    <li className="mb-lg-3 mb-2">
                        <Forminput
                            label="이름"
                            labelnm="formnm"
                            placeholder="이름을 입력해주세요."
                            register={register}
                            required="이름은 필수 입력 항목입니다."
                            pattern={{ value: /^[가-힣]{2,}$/, message: "이름을 정확하게 입력해주세요." }}
                            labelcls="form-label formfont_text_pyj mb-1"
                            inputcls="form-control formfont_placehold_pyj input_box_1_pyj px-0"
                            errors={errors}
                        />
                    </li>
                    <li className="mb-lg-3 mb-2">
                        <Contactinput
                            label="연락처"
                            labelnm="formhp"
                            labelcls="form-label formfont_text_pyj mb-1"
                            inputcls="form-input formfont_placehold_pyj input_box_2_pyj px-0"
                            register={register}
                            errors={errors}
                        />
                    </li>
                    <li className="mb-lg-3 mb-2">
                        <Forminput
                            label="납품 물건"
                            labelnm="formitem"
                            placeholder="납품 물건을 입력해주세요."
                            register={register}
                            required="납품 물건은 필수 입력 항목입니다."
                            pattern={{ value: /^[가-힣]+$/, message: "납품 물건을 정확하게 입력해주세요." }}
                            labelcls="form-label formfont_text_pyj mb-1"
                            inputcls="form-control formfont_placehold_pyj input_box_1_pyj px-0"
                            errors={errors}
                        />
                    </li>
                    <li className="mb-lg-3 mb-2">
                        <Forminput
                            label="기타 메시지"
                            labelnm="c_message"
                            placeholder="기타 의견을 적어주세요."
                            register={register}
                            labelcls="form-label formfont_text_pyj mb-1"
                            inputcls="form-control formfont_placehold_pyj input_box_1_pyj px-0"
                            errors={errors}
                        />
                    </li>
                    <li className="d-flex formfont_text_pyj mt-lg-4 mt-3 form-check justify-content-center align-items-center ps-0">
                        <p className="my-0">개인정보 수집 및 이용에 동의하십니까?</p>
                        <input
                            type="checkbox"
                            className="form-check-input ms-lg-4 ms-2 me-lg-2 me-1 mt-0"
                            {...register("agree", { required: "개인정보 수집 및 이용에 동의해야 합니다." })}
                        />
                        <label className="form-check-label">동의함</label>
                    </li>
                    <li className="d-flex justify-content-center">
                        {errors.agree && <span className="formfont_text_pyj text-danger">개인정보 수집 및 이용에 동의해야 합니다.</span>}
                    </li>
                    <li className="mx-auto">
                        <button type="submit" className="formbuttonstyle_pyj mt-lg-4 mt-3">문의하기</button>
                    </li>
                </ul>
            </form>
            
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content d-flex flex-column justify-content-lg-end justify-content-center align-items-center py-lg-4 py-3">
                        <p className="formfont_subtitle_pyj text-center p-2 m-0 text-nowrap mb-lg-2 mb-0">신청해주셔서 감사합니다!
                            <span className="d-block formfont_popup_pyj mt-lg-1 mt-0">확인 후 최대한 빠르게 연락드리겠습니다.</span>
                        </p>
                        <button onClick={closePopup} className="popupbuttonstyle">닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Formboxhook;
