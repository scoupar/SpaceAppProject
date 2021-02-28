import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './Quiz.css';


class Quiz extends Component {

    state = {
        questions: {
            1: "Which is the smallest planet within our solar system?",
            2: "Uranus has only been visited by what spacecraft?",
            3: "There have been more missions to this planet versus any other planet?",
            4: "Which planet has the most moons?"
        },
        answers: {
            1: {
                1: "Mars",
                2: "Venus",
                3: "Earth"
              },

            2: {
                1: "SpaceShipTwo",
                2: "The Voyager 2",
                3: "Viking 1"
            },
            3: {
                1: "Jupiter",
                2: "Mercury",
                3: "Mars"
            },
           4: {
                1: "Jupiter",
                2: "Uranus",
                3: "Saturn"
   
            }
        
        }, 
        correctAnswers: {
            1: "1",
            2: "2",
            3: "3",
            4: "3"
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,

        }

    render () {
        let { questions, answers, step} = this.state;

    return (
    <>
    
    <h1 className="quiz"> Welcome to Space Quiz </h1>
        <div className="content">
            <Question  question={questions[step]}/>
            <Answer  answer={answers[step]} step={step}/>
   
   </div>
    </>

    
   );
}
}




 

export default Quiz;