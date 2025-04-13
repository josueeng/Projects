import React from 'react'
import * as I from "../styles/Input.styled"
export default function Input() {
  return (
    <I.SearchContainer>
      <I.SearchInput type="text" placeholder="Digite aqui o que você procura" />
      <I.SearchButton>
        <I.img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Lupa" />
      </I.SearchButton>
    </I.SearchContainer>
  )
}
