import React, { useState } from 'react';
import * as M from "../styles/Menu.styled";

import ImgSub from "../assets/Img/ImgSub.png";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null); // Estado para rastrear a categoria ativa

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category) => {
        // Se já estiver aberta, feche. Se for outra categoria, altere para a nova.
        setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
    };

    const categoryList = [
        "Eletrônicos",
        "Moda",
        "Casa",
        "Esporte",
        "Saúde",
        "Beleza",
        "Brinquedos",
        "Livros",
        "Alimentos",
        "Ferramentas",
        "Outros",
    ];

    const subcategories = {
        Eletrônicos: ["Celulares", "Computadores", "Acessórios", "TVs", "Câmeras", "Drones", "Fones de ouvido", "Smartwatches", "Tablets", "Impressoras", "Monitores", "Consoles", "Projetores", "Carregadores", "Baterias"],
        Moda: ["Roupas", "Calçados", "Acessórios", "Bolsas", "Joias", "Relógios", "Chapéus", "Óculos", "Cintos", "Roupas íntimas", "Roupas esportivas", "Roupas de banho", "Casacos", "Vestidos", "Ternos"],
        Casa: ["Móveis", "Decoração", "Utensílios", "Eletrodomésticos", "Cama, Mesa e Banho", "Iluminação", "Tapetes", "Cortinas", "Organizadores", "Ferramentas domésticas", "Jardinagem", "Cozinha", "Banheiros", "Quartos", "Salas"],
        Esporte: ["Roupas esportivas", "Equipamentos", "Acessórios", "Calçados esportivos", "Bolas", "Bicicletas", "Skates", "Suplementos esportivos", "Mochilas esportivas", "Relógios esportivos", "Raquetes", "Capacetes", "Luvas", "Pesos", "Esteiras"],
        Saúde: ["Suplementos", "Equipamentos médicos", "Produtos de higiene", "Vitaminas", "Medicamentos", "Cuidados pessoais", "Produtos ortopédicos", "Termômetros", "Máscaras", "Desinfetantes", "Cremes terapêuticos", "Óleos essenciais", "Produtos para massagem", "Aparelhos de pressão", "Aparelhos de glicemia"],
        Beleza: ["Maquiagem", "Cuidados com a pele", "Perfumes", "Shampoos", "Condicionadores", "Tinturas de cabelo", "Esmaltes", "Acessórios de beleza", "Escovas de cabelo", "Secadores", "Chapinhas", "Cremes hidratantes", "Máscaras faciais", "Produtos anti-idade", "Produtos para barbear"],
        Brinquedos: ["Brinquedos educativos", "Brinquedos eletrônicos", "Brinquedos de construção", "Bonecas", "Carrinhos", "Jogos de tabuleiro", "Quebra-cabeças", "Pelúcias", "Instrumentos musicais infantis", "Kits de ciência", "Kits de arte", "Brinquedos de madeira", "Brinquedos de ação", "Brinquedos para bebês", "Brinquedos de controle remoto"],
        Livros: ["Ficção", "Não-ficção", "Autoajuda", "Romances", "Biografias", "História", "Ciência", "Tecnologia", "Arte", "Infantil", "Jovem adulto", "Clássicos", "Poesia", "Religião", "Negócios"],
        Alimentos: ["Alimentos saudáveis", "Alimentos gourmet", "Bebidas", "Snacks", "Doces", "Chocolates", "Cafés", "Chás", "Massas", "Molhos", "Temperos", "Carnes", "Frutas", "Vegetais", "Produtos orgânicos"],
        Ferramentas: ["Ferramentas elétricas", "Ferramentas manuais", "Materiais de construção", "Parafusos", "Brocas", "Chaves de fenda", "Martelos", "Alicates", "Serrotes", "Furadeiras", "Lixadeiras", "Soldadores", "Multímetros", "Níveis", "Trenas"],
        Outros: ["Outros produtos variados", "Presentes", "Produtos personalizados", "Itens colecionáveis", "Produtos sazonais", "Produtos para pets", "Produtos ecológicos", "Produtos importados", "Produtos artesanais", "Produtos promocionais", "Produtos de segunda mão", "Produtos de luxo", "Produtos para festas", "Produtos para viagens", "Produtos tecnológicos"],
    };

    const ImgSubcategories = {
        Eletrônicos: ImgSub,
        Moda: ImgSub,
        Casa: ImgSub,
        Esporte: ImgSub,
        Saúde: ImgSub,
        Beleza: ImgSub,
        Brinquedos: ImgSub,
        Livros: ImgSub,
        Alimentos: ImgSub,
        Ferramentas: ImgSub,
        Outros: ImgSub,
    };

    return (
        <>
            <M.MenuContainer onClick={toggleMenu}>
                <M.BarMenu>
                    <M.MenuItem isOpen={isOpen}></M.MenuItem>
                    <M.MenuItem isOpen={isOpen}></M.MenuItem>
                    <M.MenuItem isOpen={isOpen}></M.MenuItem>
                </M.BarMenu>
                <M.MenuText isOpen={isOpen}>Categorias</M.MenuText>
            </M.MenuContainer>
            <M.ContCat isOpen={isOpen}>
                <M.ContCategorias>
                    {categoryList.map((category, index) => (
                        <M.Categoria
                            key={index}
                            isCatOpen={activeCategory === category} // Verifica se é a categoria ativa
                            onClick={() => handleCategoryClick(category)} // Alterna a categoria ativa
                        >
                            {category} &gt;
                        </M.Categoria>
                    ))}
                </M.ContCategorias>
                {activeCategory && ( // Renderiza apenas a subcategoria ativa
                    <M.SubCategoria>
                        <M.SubCatText>{activeCategory}</M.SubCatText>
                        {subcategories[activeCategory].map((subcategory, subIndex) => (
                            <M.SubCatText key={subIndex}>
                                {subcategory}
                            </M.SubCatText>
                        ))}
                        <M.SubCatText>Ver Todos</M.SubCatText>
                        <M.ImgSub src={ImgSubcategories[activeCategory]} alt={activeCategory} />
                    </M.SubCategoria>
                )}
            </M.ContCat>
        </>
    );
}
