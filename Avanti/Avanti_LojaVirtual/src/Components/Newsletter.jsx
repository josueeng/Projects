import React from 'react'
import image from '../assets/Img/image.png'
import * as N from '../styles/Newsletter.style'
export default function Newsletter() {
  return (
    <>
        <N.NewsletterContainer>
            <N.ImageContainer>
            <N.Image src={image} alt="Imagem de fundo" />
            <N.Text>Entre em contato conosco e verifique a disponibilidade para sua região!</N.Text>
            </N.ImageContainer>
            <N.ContentContainer>
            
            <N.Inputs>
                <N.Description>Insira seu e-mail para receber nossas novidades e promoções.</N.Description>
                <N.InputContainer>
                    <N.Input type="email" placeholder="Seu e-mail" />
                    <N.Button type="submit">Enviar</N.Button>
                </N.InputContainer>
            </N.Inputs>
            
            </N.ContentContainer>
        </N.NewsletterContainer>
      
    </>
  )
}
