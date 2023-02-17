//-------------------------задание 8-------------------------
let mapArray = new Map()

mapArray.set('one', 'first')
mapArray.set(2, 'second')
mapArray.set('qwerty', false)

for (let item of mapArray.keys()) {
    console.log(`Ключ - ${item}, значение - ${mapArray.get(item)}.`)
}
