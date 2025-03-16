import React from 'react';
import * as A from './assets/styles/app.styled';
import Quiz from './components/Quiz/Quiz';

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);

  return (
    <A.Container>
      <A.ContainerApp>
        {startQuiz ? <Quiz /> : <button onClick={() => setStartQuiz(true)}>Iniciar Quiz</button>}
      </A.ContainerApp>
    </A.Container>
  );
}