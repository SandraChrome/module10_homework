//-------------------------задание 7-------------------------
const myNewArray = [0, 0, 99, 1, 2, 3, '', null, undefined, 'qwerty', 8, false, 10]

function arrayItems(array) {
    const onlyNumber = array.filter(item => typeof item === 'number')
    const zeroNumb = onlyNumber.filter(item => item === 0)
    const withoutZero = onlyNumber.filter(item => item !== 0)
    const evenNumbers = withoutZero.filter(item => item % 2 === 0)
    const oddNumbers = withoutZero.filter(item => item % 2 !== 0)

    console.log(`Чётных: ${evenNumbers.length}, нечётных: ${oddNumbers.length}, нулей: ${zeroNumb.length}.`)
}

arrayItems(myNewArray)