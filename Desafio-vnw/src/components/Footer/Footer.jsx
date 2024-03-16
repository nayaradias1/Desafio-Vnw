import logo from "../../assets/logo.png"
import pla from "../../assets/pla.png"
import store from "../../assets/store.png"
import * as S from "./footer_styled"


export default function Footer() {
  return (
    <S.Footer>
        <S.Rodape1>
        <img src={logo} alt="" />
        <p>Mac donalds</p>
        <S.rodape>
            <img src={pla} alt="" />
            <img src={store} alt="" />
        </S.rodape>
        </S.Rodape1>        
            
    </S.Footer>
  )
}