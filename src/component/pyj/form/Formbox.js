function Formbox() {
    return (
      <form action="/submit-form" method="post" id="cooperation">
        <ul>
          <li className="mb-lg-3 mb-2">
            <label htmlFor="name" className="form-label formfont_text_pyj mb-1">이름</label>
            <input type="text" className="form-control formfont_placehold_pyj input_box_1_pyj px-0" id="c_name" placeholder="이름을 입력해주세요." name="name" required/>
          </li>
          <li className="mb-lg-3 mb-2">
            <label htmlFor="contact" className="form-label formfont_text_pyj mb-1">연락처</label>
            <div className="d-flex" id="hp">
                <input type="text" className="form-input formfont_placehold_pyj input_box_2_pyj px-0" placeholder="010"  name="hp[0]" lang="3" required/>
                <input type="text" className="form-input formfont_placehold_pyj input_box_2_pyj px-0 mx_1" placeholder="0000" name="hp[1]" lang="4" required/>
                <input type="text" className="form-input formfont_placehold_pyj input_box_2_pyj px-0" placeholder="0000" name="hp[2]" lang="4" required/>
            </div>
          </li>
          <li className="mb-lg-3 mb-2">
            <label htmlFor="product" className="form-label formfont_text_pyj mb-1">납품 물건</label>
            <input type="text" className="form-control formfont_placehold_pyj input_box_1_pyj px-0" id="c_product" placeholder="납품할 물건을 입력해주세요." name="product" required/>
          </li>
          <li className="mb-lg-3 mb-2">
            <label htmlFor="message" className="form-label formfont_text_pyj mb-1">기타 메시지</label>
            <input type="text" className="form-control formfont_placehold_pyj input_box_1_pyj px-0" id="c_message" placeholder="기타 의견을 적어주세요." name="message" not-null/>
          </li>
          <li className="d-flex formfont_text_pyj my-lg-4 my-3 form-check justify-content-center align-items-center ps-0">
            <p className="my-0">개인정보 수집 및 이용에 동의하십니까?</p>
            <input type="checkbox" className="form-check-input ms-lg-4 ms-2 me-lg-2 me-1 mt-0" id="agree" name="agree" required/>
            <label htmlFor="agree" className="form-check-label">동의함</label>
          </li>
          <li className="mx-auto">
            <button type="submit" className="formbuttonstyle_pyj">문의하기</button>
          </li>
        </ul>
      </form>
    )
  } 
  
  export default Formbox