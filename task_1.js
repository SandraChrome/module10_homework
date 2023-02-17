//-----------------------задание 1--------------------------
const userNumber = +prompt('Введите значение')

if (typeof userNumber === 'number' && isNaN(userNumber) != true){
    userNumber % 2 === 0
        ? console.log(userNumber + ' - четное.')
        : console.log(userNumber + ' - не четное.')
} else {
    console.log('Упс, кажется, вы ошиблись.')
}