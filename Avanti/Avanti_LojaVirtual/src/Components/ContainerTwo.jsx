import React from 'react'
import * as C from '../styles/ContainerTwo.styled'
import { FaMapMarkerAlt } from 'react-icons/fa';

import Img from "../assets/Img/segundo banner.png"
export default function ContainerTwo() {
  return (
    <C.ContainerTwo>
      <C.ContainerText>
      <C.TextTitle>Lorem, ipsum.</C.TextTitle>
        <C.ContLocalizacao>
        <FaMapMarkerAlt size={30} color="#005CFF" />
        <C.TextLocal>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </C.TextLocal>

        </C.ContLocalizacao>
        <C.ContLocalizacao>
        <FaMapMarkerAlt size={30} color="#005CFF" />
        <C.TextLocal>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </C.TextLocal>

        </C.ContLocalizacao>
        <C.ContLocalizacao>
        <FaMapMarkerAlt size={30} color="#005CFF" />
        <C.TextLocal>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </C.TextLocal>

        </C.ContLocalizacao>
      </C.ContainerText>
      <C.Img src={Img} alt="" />
      
      
    </C.ContainerTwo>
  )
}
