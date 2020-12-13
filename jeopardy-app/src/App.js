import { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import Counter from './Counter';

function App() {

  const [game, setGame] = useState([]);
  const updateGame = async () => {
    try {
      const apiEndpoint = "http://jservice.io/api/random";
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setGame(data)
    } catch {
      console.log("failed to retrieve data")
    }
  }

  useEffect(() => {
    updateGame();
  }, []);


  return (
    <div className="App">
      <h2 className="Counter"> <Counter /></h2>
      <h1>JEOPARDY</h1>
      <button className="questionBtn" onClick={() => updateGame()}>NextQuestion</button>
      {
        game.map((question) => {
          return (
              <div className="questionText">
              {question.question}
              <Question answer={question.answer} />
            </div>
          )
        })
      }

    </div>
  );
}
export default App;