//-------------------------задание 6-------------------------
const newArray = [1, 1, '1', 1, 1]

const typeFirstItem = typeof newArray[0]
const firstItem = newArray[0]

const result = newArray.every(elem => typeof elem === typeFirstItem) && newArray.every(elem => elem === firstItem)

console.log(result)