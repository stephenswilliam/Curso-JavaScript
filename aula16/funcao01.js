function parimpar(n) {
    if (n % 2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}
var res = ''
var num = 4
res = parimpar(num)
console.log(`O número ${num} é ${res}`)
res = parimpar(5)
console.log(res)
console.log(parimpar(7))