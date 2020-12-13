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
      console.log(data);
      
      setGame(data);
   
      
    } catch {
      console.log("failed to retrieve data");
    }
  }

  useEffect(() => {
    updateGame();
  }, []);


  return (
    <div>
      <img src="./jeopardy-logo.jpg"></img>
      
  {
      game.map((question) => {
        console.log(question);
          let category = question.category.title;
          let value = question.value;
        return (
        <div>
          
          <span className="stats">Category: {category}</span>
          <br />
          <span className="stats">Points: {value}</span>

          

          <h2 className="Counter"> <Counter /></h2>
          <div className="main-content">
            {/* <h1>JEOPARDY</h1> */}
              <button className="questionBtn" onClick={() => updateGame()}>NextQuestion</button>
                <div className="questionText">
                  {question.question}
                    <Question answer={question.answer} />
                    </div>
            </div>
        </div>
      )
    })
  }
    </div>
  );
}
export default App;