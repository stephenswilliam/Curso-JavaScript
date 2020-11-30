let amigo = [0,1]
console.log(amigo)
console.log(typeof amigo) // array também é um objeto
let amigo1 = {nome: 'José', sexo: 'M', peso: 84.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(amigo1)
console.log(typeof amigo1)
console.log(`${amigo1.nome} pesa ${amigo1.peso}Kg`)
amigo1.engordar(2)
console.log(`${amigo1.nome} pesa ${amigo1.peso}Kg`)