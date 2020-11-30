function calcular(){
    var num = window.document.getElementById('txtNum')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = "" /* limpa a div */
        var valnum = Number(num.value)
        var i = 1
        while (i <= 10)  {
            /* criando um option, que é um item dentro do select*/
            var item = window.document.createElement('option')
            item.text = `${valnum} X ${i} = ${valnum*i}`
            item.value = `tab${i}` /* cria um value para o item (é usado para saber o item selecionado, quando aplicado) equivale ao <option value="..."> </option>*/
            tab.appendChild(item)
            i++
        }
        
    } 
    /* outra forma de fazer a tabuada, sem o select
    var num = window.document.getElementById('txtNum')
    var res = window.document.getElementById('resultado')
    if (num.value.length == 0) {
        res.innerHTML = 'Número invalido !'
    } else {
        var valnum = Number(num.value)
        var calc = 0
        var tabuada = ""
        for (var i = 0; i <= 10; i++)  {
            calc = valnum * i
            tabuada += `${valnum} X ${i} = ${calc} </br> `
        }
        res.innerHTML = `${tabuada}`  
    } */
}