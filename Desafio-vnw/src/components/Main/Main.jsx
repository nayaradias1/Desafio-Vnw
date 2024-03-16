import React, { useState } from "react";
import Card from "./Card";
import * as S from "./main_styled";
import sofa from "../../assets/sofa.png";
import loja from "../../assets/loja.png";
import banner from "../../assets/banner.png";
import bigmac2 from "../../assets/bigmac2.png";
import batata from "../../assets/batata.png";
import sorvete from "../../assets/sorvete.png";

export default function Main() {
  const [selecImage, setSelecImage] = useState(bigmac2);

  const clicar = (image) => {
    setSelecImage(image);
  };

  return (
    <main>
      <S.Lanche imagem={selecImage}>
        <img src={selecImage} alt="" />
        <S.Texto>
          <h2>
            BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span>
          </h2>
        </S.Texto>
      </S.Lanche>
      <S.Imagens>
        <img
          src={bigmac2}
          alt=""
          onClick={() => clicar(bigmac2)}
          style={{ cursor: "pointer" }}
        />
        <img
          src={batata}
          alt=""
          onClick={() => clicar(batata)}
          style={{ cursor: "pointer" }}
        />
        <img
          src={sorvete}
          alt=""
          onClick={() => clicar(sorvete)}
          style={{ cursor: "pointer" }}
        />
      </S.Imagens>
      <S.Promocao>
        <h2>Promoção</h2>
        <S.Center>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
          <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
          <Card imagem={banner} texto={"Confira as medidas que o Méqui adotou!"} />
        </S.Center>
      </S.Promocao>
    </main>
  );
}