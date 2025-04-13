import React, { useEffect, useState } from 'react';
import * as L from "../styles/Lancamentos.styled"; 

export default function Lancamentos() {
  const [produtos, setProdutos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('https://productlaunch-api.onrender.com/Produtos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => {
        setProdutos(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(produtos.length / itemsPerPage) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(produtos.length / itemsPerPage) - 1 ? 0 : prevIndex + 1));
  };

  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = produtos.slice(startIndex, endIndex);
  console.log(produtos)
  return (
    <>
    <L.ContTop>
    <L.TextTop>Lançamentos</L.TextTop>
    <L.Vermais>Ver mais</L.Vermais>
    </L.ContTop>
    <L.LancamentosContainer>
      <L.Arrow className="left" onClick={handlePrev}>&#9664;</L.Arrow>
      
      <L.ProductsWrapper>
        {currentProducts.map(produto => (
          <L.Prod key={produto.id} className="card">
            <L.CampTag><L.Tag>{produto.tag}</L.Tag></L.CampTag>
            <L.ImgProd src={produto.imge_url} alt={produto.nome} />
            <L.Title>{produto.nome}</L.Title>
            <L.ContainerValores>
            <L.ContainerPrice>
              <L.Desco>R$ {produto.preco_real.toFixed(2)}</L.Desco>
              <L.Preco> R$ {produto.preco.toFixed(2)}</L.Preco>
            </L.ContainerPrice>
            <L.Desconto>10% off</L.Desconto>
            </L.ContainerValores>
            <L.Parcel>ou em até 10 vezes de <L.SpanPrice>{(produto.preco / 10).toFixed(3)}</L.SpanPrice></L.Parcel>
            
            <L.Comprar>Comprar</L.Comprar>
          </L.Prod>
        ))}
      </L.ProductsWrapper>
      <L.Arrow className="right" onClick={handleNext}>&#9654;</L.Arrow>
    </L.LancamentosContainer></>
  );
}
