import styled from "styled-components";

export const CampingDetailMain = styled.div`
display: grid;
grid-template-areas: "a a a a a a";
gap: 20px;
justify-content: space-between;
padding: 0 70px;
margin-top: 50px;
@media only screen and (max-width: 1350px) {
    grid-template-areas: "a a a";
}
@media only screen and (max-width: 560px) {
    justify-content: center;    
}
`
export const CampingDetailImg = styled.img`
height: 140px;
`
export const CampingDetailImg4 = styled.img`
height: 140px;
@media only screen and (max-width: 560px) {
    display: none;
}
`
export const CampingDetailImg3 = styled.img`
height: 140px;
@media only screen and (max-width: 750px) {
    display: none;
}
`
export const CampingDetailImg2 = styled.img`
height: 140px;
@media only screen and (max-width: 1350px) {
    display: none;
}
`
export const CampingDetails = styled.div`
padding: 0 70px;
margin-top: 20px;
`
export const LocationName = styled.h1`
color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const LocationDiv = styled.div`
display: flex;
align-items: center;
gap: 20px;
margin-top: 20px;
margin-bottom: 15px;
`
export const LocationH2 = styled.h2`
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const LocationButton = styled.button`
width: 120px;
height: 25px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid var(--sariq, #FF7A00);
color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
background-color: #fff;
`
export const AllDetailsDiv = styled.div`
display: flex;
align-items: center;
gap: 100px;
margin-top: 20px;
@media only screen and (max-width: 670px) {
    gap: 50px;
}
@media only screen and (max-width: 600px) {
    gap: 50px;
    flex-direction: column;
    align-items: start;
}
`
export const AllInTwoMain = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const AllInTwo = styled.div`
display: flex;
align-items: center;
gap: 10px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const DescriptionH4 = styled.h4`
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 20px;
`

export const DescriptionP = styled.p`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
`
export const MapImg = styled.img`
width: 100%;
margin-top: 5%;
margin-bottom: 3%;
`