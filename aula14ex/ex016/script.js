function contar(){
    let inicio = window.document.getElementById('txtInicio')
    let fim = window.document.getElementById('txtFim')
    let passo = window.document.getElementById('txtPasso')
    let res = window.document.getElementById('resultado')
    


    let valInicio = Number(inicio.value)
    let valFim = Number(fim.value)
    let valPasso = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || valPasso <= 0) {
        res.innerHTML = 'Valores invalidos !'
    } else {
        res.innerHTML = 'Contando: <br>'
        if (valInicio < valFim){
            for (let i = valInicio; i <= valFim; i += valPasso)
            res.innerHTML += `\u{1F449} ${i} `
        }else {
            for (let i = valInicio; i >= valFim; i -= valPasso)
            res.innerHTML += `\u{1F449} ${i} `
            }
        res.innerHTML += ` \u{1F3C1}`
        }
/* Para obter o emoji, pesquisar por 'unicode emoji list', consultar o endereço https://unicode.org/emoji/charts-12.0/full-emoji-list.html, obter o código desejado e trocar o U+.... por \u{....}*/
}