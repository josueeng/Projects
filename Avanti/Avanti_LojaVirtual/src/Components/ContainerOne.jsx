import React from 'react'
import * as C from "../styles/ContainerOne.styled";

import xicara from "../assets/Img/xicara.png"
export default function ContainerOne() {
  return (
    <C.ContainerOne>
        <C.ContImage>
            <img src={xicara} alt="" />

        </C.ContImage>
        <C.ContText>
        <C.TextTitle>Lorem Ipsum</C.TextTitle>
        <C.TextSubTitle>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.                  .</C.TextSubTitle>

        </C.ContText>
      
    </C.ContainerOne>
  )
}
