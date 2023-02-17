//-------------------------задание 3-------------------------
const myString = 'Level'

function reverseString(string) {
    const myArray = string.split('')
    const myArrayRev = myArray.reverse()
    const myStringRev = myArrayRev.join('')
    console.log(myStringRev)
}

reverseString(myString)