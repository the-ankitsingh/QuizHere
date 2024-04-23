import React, { useEffect, useState } from 'react';

export default function Ankitquiz({ data, setStop, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [className, setclassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };

  const handleClick = (a) => {
    setselectedAnswer(a);
    setclassName("answer active");

    delay(3000, () => {
      setclassName(a.correct ? "answer is correct" : "answer is wrong");

      delay(3000, () => {
        if (a.correct) {
          setQuestionNumber((prev) => prev + 1);
          setselectedAnswer(null);
        } else {
          setStop(true);
        }
      });
    });
  };

  return (
    <div>
      <div className="Ankitquiz">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answers.map((a, index) => (
            <div
              key={index}
              className={selectedAnswer === a ? className : "answer"}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
