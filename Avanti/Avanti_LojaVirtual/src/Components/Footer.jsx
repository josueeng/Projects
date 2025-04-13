import React from 'react';
import * as F from "../styles/Footer.styled";
import redes from "../assets/Img/redes.png";
import Cartoes from "../assets/Img/Cartoes.png";
import Icon from "../assets/Img/Icon.png";
export default function Footer() {
    return (
        <F.Footer>
            <F.FooterTop>
            <img src={redes} alt="" />
            <F.MenuFoot>
                <F.MenuItemStrong>Sobre</F.MenuItemStrong>
                <F.MenuItem>Contato</F.MenuItem>
                <F.MenuItem>Termos de Uso</F.MenuItem>
                <F.MenuItem>Política de Privacidade</F.MenuItem>
            </F.MenuFoot>
            <F.MenuFoot>
                <F.MenuItemStrong>Institucional</F.MenuItemStrong>
                <F.MenuItem>Sobre Nós</F.MenuItem>
                <F.MenuItem>Nossas Lojas</F.MenuItem>
                <F.MenuItem>Privacidade e Segurança</F.MenuItem>
                <F.MenuItem>Termos e Condições</F.MenuItem>
            </F.MenuFoot>
            <F.MenuFoot>
                <F.MenuItemStrong>central de ajuda</F.MenuItemStrong>
                <F.MenuItem>Fale conosco</F.MenuItem>
                <F.MenuItem>Trocas e Devoluções</F.MenuItem>
                <F.MenuItem>Frete e Entrega</F.MenuItem>
                <F.MenuItem>Pagamento e Segurança</F.MenuItem>

            </F.MenuFoot>
            <F.MenuFoot>
                <F.MenuItemStrong>Atendimento</F.MenuItemStrong>
                <F.MenuItem> <F.MenuItemSpan>Telefone:</F.MenuItemSpan> (00) 1234 - 5678</F.MenuItem>
                <F.MenuItem> <F.MenuItemSpan>Email:</F.MenuItemSpan> exemplo@exemplo.com.br</F.MenuItem>
                <F.MenuItem> <F.MenuItemSpan>Horário:</F.MenuItemSpan> 08:00 - 18:00</F.MenuItem>
                <F.MenuItem> <F.MenuItemSpan>Segunda a Sexta</F.MenuItemSpan></F.MenuItem>
            

            </F.MenuFoot>
                
                
            </F.FooterTop>
            <img src={Cartoes} alt="" />
            <F.Lorem>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </F.Lorem>
            <img src={Icon} alt="" />
            
        </F.Footer>
    );
}
