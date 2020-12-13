import React, {useState} from 'react'

const Question = (props) => {
    const [showAnswer, toggleAnswer] = useState(false);
    return (
        <div>
            <br />
            <div className="questionText">{props.question}</div>
            <button className="answerBtn" onClick={() => toggleAnswer(!showAnswer)}>Show Answer</button>
            <div> {showAnswer && props.answer }</div>
        </div>
    )
}
export default Question;