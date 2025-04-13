import React from 'react'
import * as H from "../styles/Header.styled"
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Menu from './Menu.jsx'

import Logo from "../assets/Img/Logo.png"
import Input from './Input.jsx'
import HamburgerMenu from './Menu.jsx';
function Header() {
  return (
    <H.HeaderContainer>
      <H.TopHeader><H.TextTopHeader>Ganhe <H.TopTexSpan>R$10,00</H.TopTexSpan> de desconto no seu primeiro pedido. Utilize o cupom <H.TopTextSpan1>DESCONTO10</H.TopTextSpan1> </H.TextTopHeader></H.TopHeader>
      <H.CenterHeader>
        <img src={Logo} alt="Logo da empresa" />
        <Input />

        <H.IconUser>
          <H.IconUserText>Olá,
            Josué Lopes!

          </H.IconUserText>
          <FaUser size={30} color="#005CFF" />
          <FaShoppingCart size={30} color="#005CFF" />
        </H.IconUser>
      </H.CenterHeader>
      <H.BackHeader>
        <H.MenuHam><Menu/> </H.MenuHam>
        <H.TextHam1>Departamento</H.TextHam1>
        <H.TextHam1>Departamento</H.TextHam1>
        <H.TextHam1>Departamento</H.TextHam1>
        <H.TextHam1>Departamento</H.TextHam1>
        <H.TextHam1>Departamento</H.TextHam1>
        <H.TextHam1>Departamento</H.TextHam1>
        <H.TextHam1>Departamento</H.TextHam1>
        
      </H.BackHeader>
    </H.HeaderContainer>
  )
}

export default Header
