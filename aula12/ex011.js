var idade = 17
if (idade < 16) {
    console.log(`Uma pessoa com ${idade} anos, é Menor de idade e não vota.`)
} else {
    if (idade < 18) {
        console.log(`Uma pessoa com ${idade} anos, é Menor de idade e o voto é opcional.`)
    } else {
        if (idade < 70) {
            console.log(`Uma pessoa com ${idade} anos, é Maior de idade e o voto é obrigatório.`)
        } else {
            console.log(`Uma pessoa com ${idade} anos, é Maior de idade e o voto é opcional.`)
        }
    }
}