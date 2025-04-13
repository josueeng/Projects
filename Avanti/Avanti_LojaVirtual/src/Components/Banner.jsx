import React from 'react'
import * as B from "../styles/Banner.styled"
import BanFoto from "../assets/Img/Banner.png"
export default function Banner() {
  return (
    <B.BannerContainer>
      <B.ImgBan src={BanFoto} alt="" />
        <B.BannerText>
        <B.TextTopBan> <B.TextSpanTop>SUPER</B.TextSpanTop> SALE</B.TextTopBan>
        <B.TextCenterBan> Itens selecionados com até</B.TextCenterBan>
        <B.TextBackBan> 50% OFF</B.TextBackBan>
        </B.BannerText>
    </B.BannerContainer>
  )
}
