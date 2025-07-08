import styled from "styled-components";

export const VideosMain = styled.div`
display: grid;
grid-template-areas: " a a a a";
justify-content: space-evenly;
gap: 20px;
row-gap: 40px;
padding: 0 70px;
/* border: 1px solid blue; */
@media only screen and (max-width: 1370px) {
    grid-template-areas: "a a a";
}
@media only screen and (max-width: 1060px) {
    grid-template-areas: "a a";
}
@media only screen and (max-width: 750px) {
    grid-template-areas: "a";
    padding: 0 40px;
}
`
export const VideosChild = styled.div`
width: 292px;
height: 292px;
flex-shrink: 0;
border-radius: 20px;
/* border: 1px solid red; */
`
export const VideosChildSecondLine = styled.div`
width: 292px;
height: 292px;
flex-shrink: 0;
border-radius: 20px;
/* border: 1px solid red; */
@media only screen and (max-width: 750px) {
    display: none;
}
`

export const VideosChildLastTwo = styled.div`
width: 292px;
height: 292px;
flex-shrink: 0;
border-radius: 20px;
/* border: 1px solid red; */
@media only screen and (max-width: 1370px) {
    display: none;
}
@media only screen and (max-width: 670px) {
    display: none;
}

`
