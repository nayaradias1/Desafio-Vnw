import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Footer = styled.footer`
/* border: solid 1px red; */
${center}
height: 8vh;
`
export const rodape = styled.div `
height: 50px;
width: 430px;
display: flex;
justify-content: space-around;
`
export const Rodape1 = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
color: #6e6e6e;
width: 150vh;
`