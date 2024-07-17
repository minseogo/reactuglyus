import styled from 'styled-components';

export const Title = styled.h2`
    font-family: ${props => props.title ? "Rubik" : "Pretendard" } ;
    font-size: 38px;
    font-weight: 700;
    color: #FE663F;
    letter-spacing: -0.5px;
    line-height: 2.5rem;
    @media (max-width: 990px) {
          font-size: 28px;
          line-height: 1.7rem;       
    }
`;

export const Leadcopy = styled.p`
    font-family: ${props => props.leadcopy ? "Pretendard" : "Rubik"};
    font-size: 18px;
    font-weight: 600;
    color: #414B5A;
    letter-spacing: -0.5px;
    line-height: 1.8rem;
    @media (max-width: 990px) {    
        font-size: 16px;
        line-height: 1.4rem;
    }
`;


export const Button = styled.button`
    background-color: ${props => props.button ? "#fe663f" : props.bgcolor || "initial"}; // 초기값 initial 
    color: ${props => props.button ? "#fff" : props.fontcolor || "initial" }; // 유전받는 애 inherit 
    font-family: ${props => props.button ? "Pretendard" : "Rubik"};
    font-size: ${props => props.button ? "15px" : props.fontsize || "initial"}
    font-weight: ${props => props.button ? "400" : props.weight || "initial"}
    letter-spacing: -0.5px;
    line-height: 1.5rem;
    border: none;
    border-radius: 20px;
    width: 110px;
    height: 37px;
    text-align: center;
    padding: 0;
    margin: 0;
    @media (max-width: 990px) {
        font-size: 14px;
        background-color: #fe663f;
        color: #fff;
        border: none;
        border-radius: 20px;
        width: 110px;
        height: 37px;
        text-align: center;
        padding: 0;
        margin: 0;
     }
`; 

