import React, { useEffect, useState } from 'react';
import * as Q from './Quiz.styled';
import coroa from '../../assets/Imagens/coroa.png';

export default function Quiz() {
  const [women, setWomen] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://apis.codante.io/api/legado-feminino/women');
      const result = await response.json();
      setWomen(result.data.slice(0, 10)); // Limita a 10 perguntas
      console.log(result.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && !selectedAnswer) {
      nextQuestion();
    }
    const timer = setInterval(() => {
      if (timeLeft > 0 && !selectedAnswer) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, selectedAnswer]);

  useEffect(() => {
    if (women.length > 0 && currentQuestionIndex < women.length) {
      const currentQuestion = women[currentQuestionIndex];
      const wrongAnswers = getRandomWrongAnswers();
      const answers = [currentQuestion.contribuicao, ...wrongAnswers].sort(() => Math.random() - 0.5);
      setShuffledAnswers(answers);
    }
  }, [currentQuestionIndex, women]);

  const handleAnswer = (answer) => {
    if (answer === women[currentQuestionIndex].contribuicao) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);
    setTimeLeft(0); // Para o temporizador quando uma resposta é selecionada
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimeLeft(30);
  };

  const getRandomWrongAnswers = () => {
    const wrongAnswers = women
      .filter((_, index) => index !== currentQuestionIndex)
      .map(woman => woman.contribuicao);
    const shuffledWrongAnswers = wrongAnswers.sort(() => Math.random() - 0.5);
    return shuffledWrongAnswers.slice(0, 3); // Pega 3 respostas incorretas aleatórias
  };

  if (women.length === 0) return <div>Carregando...</div>;

  if (currentQuestionIndex >= women.length) {
    return (
      <div>
        <h2>Quiz Finalizado!</h2>
        <p>Você acertou {score} de {women.length} perguntas.</p>
      </div>
    );
  }

  const currentQuestion = women[currentQuestionIndex];

  return (
    <Q.Container>
      <img src={coroa} alt="Coroa" />
      <h1 style={{ fontSize: "25px" }}>Quiz do Legado Feminino</h1>
      <h2>{currentQuestion.nome}</h2>
      <p>{currentQuestion.ano_nascimento} - {currentQuestion.ano_morte}</p>
      <div>
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            style={{ backgroundColor: 'transparent', border: '1px solid white', padding: '10px', margin: '5px', cursor: 'pointer' }}
          >
            {answer}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <div>
          <p>{selectedAnswer === currentQuestion.contribuicao ? 'Correto!' : `Errado! A contribuição correta é: ${currentQuestion.contribuicao}`}</p>
          <button onClick={nextQuestion}>Próxima Pergunta</button>
        </div>
      )}
      <p>Tempo restante: {timeLeft} segundos</p>
    </Q.Container>
  );
}