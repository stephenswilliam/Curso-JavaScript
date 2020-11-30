let num = [5,2,9,3]

console.log(`O vertor tem: ${num}`)
console.log(num)
console.log(`O vertor tem: ${num.length} posições`)
console.log(`O valor da primeira posição é: ${num[0]}`)
num.sort()
console.log(`O vertor classificado tem: ${num})`)
num.push(7)
console.log(`Incluindo o 7, o vertor tem: ${num}`)
num.sort()
console.log(`O vertor classificado tem: ${num})`)

for (i = 0; i< num.length; i++) {
    console.log(`O valor da posição ${i} é ${num[i]}`)
}

for (i in num) {
    console.log(`Usando (for in) O valor da posição ${i} é ${num[i]}`)
}

let indice = num.indexOf(7)
console.log(`O valor 7 está na posição ${indice}`)
indice = num.indexOf(6)
console.log(`O valor 6 está na posição ${indice}, ou seja, não existe`)
