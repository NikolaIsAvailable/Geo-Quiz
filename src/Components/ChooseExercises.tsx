import React, { useState } from 'react'
import data from '../departements-region.json'
import { getRandomInteger, shuffle } from '../utility'
import MultipleChoice from './MultipleChoice'
import Training from './Training'

type Depart = {
    num_dep: string;
    dep_name: string;
    region_name: string;
}

type QuizArray = {
    depart: Depart
    answer: string;
}

const ChooseExercises: React.FC = () => {    
    const [displayMultipleChoice, setDisplayMultipleChoice] = useState(false)
    const [displayExercice, setDisplayExercice] = useState(false)
    const [displayTraining, setDisplayTraining] = useState(false)
    // Display
    const [quizChoices, setQuizChoices] = useState<QuizArray[]>([])

    const startQuiz = () => {
        let dataDepart = data
        
        let quizArray: QuizArray[] = []

        let randomGoodIndex = getRandomInteger(0, dataDepart.length - 1)        

        quizArray.push({
            depart: dataDepart[randomGoodIndex],
            answer: 'good'
        })

        dataDepart.splice(randomGoodIndex, 1)

        for (let index = 0; index < 3; index++) {
            let randomIndex = getRandomInteger(0, dataDepart.length - 1)

            quizArray.push({
                depart: dataDepart[randomIndex],
                answer: 'bad'
            })
            
            dataDepart.splice(randomIndex, 1)
        }
        shuffle(quizArray)
        
        setQuizChoices(quizArray)

        setDisplayExercice(true)
        setDisplayMultipleChoice(true)
    }

    const startTraining = () => {
        setDisplayExercice(true)
        setDisplayTraining(true)
    }

    return (
        <div>
            { displayExercice
                ? <>
                    { displayMultipleChoice
                        ? <MultipleChoice quizChoices={quizChoices} />
                        
                        : ''
                    }
                    { displayTraining
                        ? <Training />
                        
                        : ''
                    }
                </>

                : <div className="container">
                    <div className="row">
                        <div className="col-md-6 grow-in exercice">
                            <h2>Quiz</h2>
                            <p>Ici tu va tester tes connaissances dans les départements Français</p>
                            <p>Quiz à choix multiples</p>
                            <p>Sauras tu trouver le bon ?</p>
                            <button className="bouton mx-3" onClick={startQuiz}>Start</button>
                        </div>
                        <div className="col-md-6 grow-in exercice mb-5">
                            <h2>Training</h2>
                            <p>Tu ne connais pas les départements Francais ?</p>
                            <p>Cet entraînement est pour toi !</p>
                            <p>Nomme les départements dans l'ordre, en mode mort subite !</p>
                            <button className="bouton mx-3" onClick={startTraining}>Start</button>
                        </div>
                    </div>
                </div>
            }  
        </div>
    )
}

export default ChooseExercises
