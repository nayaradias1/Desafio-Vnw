import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`
export const Promocao = styled.section`
background-color: #FEB706;
height: 50vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
}
`
export const Center = styled.div`
/* border: solid 2px red; */
width: 70vw;
${center}
justify-content: space-around;
`
export const Card = styled.div`
/* border: solid 2px green; */
height: 32vh;
text-align: center;
background-color: white;
border-radius: 13px;
p{
   /* border: solid 2px green;  */
   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
}
`
export const Lanche = styled.div`
    background-color: #FFC72C;
    width: 100%;
    height: 380px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    img {
        width:400px;
        height: 350px;
    }
    span{
        color: red;
    }
    
    
`
export const Texto = styled.div`
width: 350px;
height: 120px;
font-size: 25px;
`

export const Imagens = styled.div`
background-color: #FFC72C;
width: 100%;
height: 200px;
font-size: 25px;
padding: 50px;
display: flex;
justify-content: space-evenly;
img {
    width: 120px;
    height: 120px;
}
`