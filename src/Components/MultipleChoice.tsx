import React from 'react'

type Depart = {
    num_dep: number | string;
    dep_name: string;
    region_name: string;
}

type QuizArray = {
    depart: Depart
    answer: string;
}

type Props = {
    [index: number]: QuizArray  
}

const MultipleChoice: React.FC<Props> = ({ quizChoices }) => {    
    
    return (
        <div>
        </div>
    )
}

export default MultipleChoice
