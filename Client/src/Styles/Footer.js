import styled from "styled-components";

export const FooterMain = styled.div`
display: flex;
justify-content: space-between;
padding: 100px 70px;
background: var(--blue, #006DAB);  
margin-top: 20px;
@media only screen and (max-width: 900px) {
    padding: 70px 40px;
} 
`
export const FooterDivs = styled.div`
@media only screen and (max-width: 900px) {
    display: none;
}
`

export const FooterH1 = styled.h1`
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 25px;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const FooterP = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 15px;
@media only screen and (max-width: 900px) {
    display: none;
}
`
export const FooterIcons =styled.div`
display: flex;
align-items: center;
gap: 10px;
`