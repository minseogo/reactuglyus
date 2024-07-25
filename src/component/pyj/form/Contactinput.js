const Contactinput = ({ label, labelnm, register, labelcls, inputcls, errors }) => {
    const placeholders = ["010", "0000", "0000"];

    return (
        <>
            <label htmlFor={labelnm} className={labelcls}>{label}</label>
            <div className="d-flex" id="hp">
                {placeholders.map((v, i) => (
                    <input key={i}
                        type="text"
                        id={`${labelnm}_${i}`}
                        placeholder={v}
                        {...register(`hp[${i}]`, { 
                            required: true,
                            pattern: { 
                                value: /^[0-9]*$/, 
                                message: "숫자만 입력할 수 있습니다."
                            }
                        })}
                        className={`${inputcls} ${i === 1 ? 'mx-1' : ''}`}
                    />
                ))}
            </div>
            {(errors.hp?.[0] || errors.hp?.[1] || errors.hp?.[2]) && (
                <span className="formfont_placehold_pyj text-danger errorps">
                    {errors.hp?.[0]?.message || errors.hp?.[1]?.message || errors.hp?.[2]?.message || "연락처를 올바르게 입력해주세요."}
                </span>
            )}
        </>
    );
};

export default Contactinput;