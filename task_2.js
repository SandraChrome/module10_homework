//-------------------------задание 2-------------------------
const x = null

const typeX = typeof x

switch (typeX) {
    case 'number':
        console.log(`${x} - число.`)
        break
    case 'string':
        console.log(`${x} - строка.`)
        break
    case 'boolean':
        console.log(`${x} - булево значение.`)
        break
    default:
        console.log('Тип x не определён.')
}