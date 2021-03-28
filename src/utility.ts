export const getRandomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

type Depart = {
    num_dep: number | string;
    dep_name: string;
    region_name: string;
}

type QuizArray = {
    depart: Depart
    answer: string;
}

export const shuffle = (arr:QuizArray []) => {
    let ctr = arr.length, temp, index

    // While there are elements in the array
    while (ctr > 0) {
    // Pick a random index
        index = Math.floor(Math.random() * ctr)
    // Decrease ctr by 1
        ctr--
    // And swap the last element with it
        temp = arr[ctr]
        arr[ctr] = arr[index]
        arr[index] = temp
    }
    return arr
}