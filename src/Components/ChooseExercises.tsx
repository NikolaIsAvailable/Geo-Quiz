import React, { useState } from 'react'
import data from '../departements-region.json'
import { getRandomInteger, shuffle } from '../utility'
import MultipleChoice from './MultipleChoice'

type Depart = {
    num_dep: number | string;
    dep_name: string;
    region_name: string;
}

type QuizArray = {
    depart: Depart
    answer: string;
}

const ChooseExercises: React.FC = () => {

    const [displayMultipleChoice, setDisplayMultipleChoice] = useState(false)
    // Display
    const [quizChoices, setQuizChoices] = useState<QuizArray[]>([])

    const startQuiz = () => {
        let dataDepart = data
        
        let quizArray: QuizArray[] = []

        let randomGoodIndex = getRandomInteger(0, dataDepart.length)        

        quizArray.push({
            depart: dataDepart[randomGoodIndex],
            answer: 'good'
        })

        dataDepart.splice(randomGoodIndex, 1)

        for (let index = 0; index < 3; index++) {
            let randomIndex = getRandomInteger(0, dataDepart.length)

            quizArray.push({
                depart: dataDepart[randomIndex],
                answer: 'bad'
            })
            
            dataDepart.splice(randomIndex, 1)
        }
        shuffle(quizArray)
        
        setQuizChoices(quizArray)

        setDisplayMultipleChoice(true)
    }

    return (
        <div>
            {console.table(quizChoices)}
            { displayMultipleChoice
                ? <MultipleChoice quizChoices={quizChoices} />

                : <>
                    <button className="bouton" onClick={startQuiz}>Quiz</button>
                    <button className="bouton">Training</button>
                </>
            }  
        </div>
    )
}

export default ChooseExercises
