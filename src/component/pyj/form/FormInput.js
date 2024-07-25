const Forminput = ({label, labelnm, placeholder, register, required, pattern, labelcls, inputcls, errors}) => (
    <>
        <label htmlFor={label} className={labelcls}>{label}</label>
        <input type="text" 
               id={labelnm} 
               placeholder={placeholder}
               {...register(label, { required, pattern })} 
               className={inputcls}
        />
        {errors[label] && <span className="formfont_placehold_pyj text-danger errorps">{errors[label].message}</span>}
    </>
)

export default Forminput;