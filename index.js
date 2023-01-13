function saturdayFun(argument = 'roller-skate') {
    return `This Saturday, I want to ${argument}!`
}

function mondayWork(argument = 'go to the office') {
    return `This Monday, I will ${argument}.`
}

function wrapAdjective(adjective) {
    return function (character2) {
        return `You are ${adjective}${character2}${adjective}!`
    }
}

