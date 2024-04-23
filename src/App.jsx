import React, { useEffect, useMemo, useState } from 'react';
import Ankitquiz from "./component/Ankitquiz";
import Timer from "./component/Timer";
import Start from "./component/Start";
import './app.css';

function App() {
  const [username, setUserName] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which of these is the national animal of India?",
      answers: [
        { text: "Lion", correct: false },
        { text: "Tiger", correct: true },
        { text: "Elephant", correct: false },
        { text: "Leopard", correct: false },
      ],
    },
    {
      id: 2,
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
        { text: "Berlin", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who is known as the 'Father of the Nation' in India?",
      answers: [
        { text: "Mahatma Gandhi", correct: true },
        { text: "Jawaharlal Nehru", correct: false },
        { text: "Subhash Chandra Bose", correct: false },
        { text: "Sardar Vallabhbhai Patel", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which is the largest planet in our solar system?",
      answers: [
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Neptune", correct: false },
        { text: "Earth", correct: false },
      ],
    },
    {
      id: 5,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Charles Dickens", correct: false },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      id: 6,
      question: "Which is the longest river in the world?",
      answers: [
        { text: "Nile", correct: true },
        { text: "Amazon", correct: false },
        { text: "Yangtze", correct: false },
        { text: "Mississippi", correct: false },
      ],
    },
    {
      id: 7,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
        { text: "Hg", correct: false },
      ],
    },
    {
      id: 9,
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      answers: [
        { text: "Venus", correct: true },
        { text: "Mars", correct: false },
        { text: "Mercury", correct: false },
        { text: "Jupiter", correct: false },
      ],
    },
    {
      id: 10,
      question: "Who is the author of the Harry Potter series?",
      answers: [
        { text: "J.K. Rowling", correct: true },
        { text: "Stephen King", correct: false },
        { text: "George R.R. Martin", correct: false },
        { text: "J.R.R. Tolkien", correct: false },
      ],
    },
    {
      id: 11,
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "Blue whale", correct: true },
        { text: "African elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
      ],
    },
    {
      id: 12,
      question: "Which is the highest mountain in the world?",
      answers: [
        { text: "Mount Everest", correct: true },
        { text: "K2", correct: false },
        { text: "Kangchenjunga", correct: false },
        { text: "Lhotse", correct: false },
      ],
    },
    {
      id: 13,
      question: "Who discovered penicillin?",
      answers: [
        { text: "Alexander Fleming", correct: true },
        { text: "Marie Curie", correct: false },
        { text: "Louis Pasteur", correct: false },
        { text: "Robert Koch", correct: false },
      ],
    },
    {
      id: 14,
      question: "What is the largest organ in the human body?",
      answers: [
        { text: "Skin", correct: true },
        { text: "Liver", correct: false },
        { text: "Brain", correct: false },
        { text: "Heart", correct: false },
      ],
    },
    {
      id: 15,
      question: "Who invented the telephone?",
      answers: [
        { text: "Alexander Graham Bell", correct: true },
        { text: "Thomas Edison", correct: false },
        { text: "Nikola Tesla", correct: false },
        { text: "Guglielmo Marconi", correct: false },
      ],
    },
  ];
  const moneyPyramid = useMemo(() => [
    // Your money pyramid data here...
    {id:1, amount: "$ 100"},
    {id:2, amount: "$ 200"},
    {id:3, amount: "$ 300"},
    {id:4, amount: "$ 500"},
    {id:5, amount: "$ 1000"},
    {id:6, amount: "$ 2000"},
    {id:7, amount: "$ 4000"},
    {id:8, amount: "$ 8000"},
    {id:9, amount: "$ 16000"},
    {id:10, amount: "$ 32000"},
    {id:11, amount: "$ 64000"},
    {id:12, amount: "$ 125000"},
    {id:13, amount: "$ 250000"},
    {id:14, amount: "$ 500000"},
    {id:15, amount: "$ 1000000"}
  ].reverse(), []);
  
  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount)
  },[moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endtext">You Earned : {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber}/>
                  </div>
                </div>
                <div className="bottom">
                  <Ankitquiz data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m)=>(
                <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Start setUserName={setUserName}/>}
    </div>
  );
}

export default App;
