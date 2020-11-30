// recursividade
// 5! = 5 X 4 X 3 X 2 X 1 = 120
// 5! = 5 X 4! = 120
// 1! = 1
function fatorial(n) {
    if (n == 1) {
        return 1
    }else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial (5))