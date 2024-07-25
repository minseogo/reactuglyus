import { useForm } from "react-hook-form";
import Forminput from "./Forminput";
// import Contactinput from "./Contactinput";

function Formboxhook() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { agree, ...formData } = data;
        const phoneNumber = `${data.hp[0]}-${data.hp[1]}-${data.hp[2]}`
        const newformdata = { ...formData , hp : phoneNumber }
        console.log(formData, newformdata);
    };

    return (
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
                     <input
                        type="text"
                        placeholder="000"
                        {...register('hp[0]', { required : true })}
                    />
                     <input 
                        type="text"
                        placeholder="0000"
                        {...register('hp[1]', { required : true })}
                    />
                     <input 
                        type="text"
                        placeholder="0000"
                        {...register('hp[2]', { required : true })}
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
    );
}

export default Formboxhook;