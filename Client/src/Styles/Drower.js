import styled from "styled-components";

export const DrowerMain = styled.div`
display: flex;
flex-direction: column;
padding-top: 30px;
`
export const DrowerLinkWrapper = styled.div`
width: 90%;
margin: 0 auto;
/* margin-top: 20px; */
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 30px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
&:hover {
    border-radius: 10px;
    background: rgba(0, 109, 171, 0.05);
  }
`