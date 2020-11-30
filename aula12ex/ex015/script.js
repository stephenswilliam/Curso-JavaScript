function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()

    var anoPesq = window.document.getElementById('txtano')
    if (anoPesq.value.length == 0 || Number(anoPesq.value) > anoAtual) {
        alert('Ano invalido!')
    } else {
        var idade = anoAtual - Number(anoPesq.value)
        var sexoPesq = window.document.getElementsByName('radiosex')
        var genero = ' '
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        /* os dois comandos acima equivalem a
            <img id='foto' ...> no html*/
        if (sexoPesq[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                /* criança */
                img.setAttribute('src', 'img-crianca-h.jpg')
            } else {
                if (idade < 21) {
                    /* jovem */
                    img.setAttribute('src', 'img-jovem-h.jpg')
                } else {
                    if (idade < 50) {
                       /* adulto */ 
                       img.setAttribute('src', 'img-adulto-h.jpg')
                    } else {
                        /* idoso */ 
                       img.setAttribute('src', 'img-idoso-h.jpg') 
                    }
                }
            }
        } else {
            genero = 'Mulher'
            if (idade <= 10) {
                /* criança */
                img.setAttribute('src', 'img-crianca-m.jpg')
            } else {
                if (idade < 21) {
                    /* jovem */
                    img.setAttribute('src', 'img-jovem-m.jpg')
                } else {
                    if (idade < 50) {
                       /* adulto */ 
                       img.setAttribute('src', 'img-adulto-m.jpg')
                    } else {
                        /* idoso */ 
                       img.setAttribute('src', 'img-idoso-m.jpg') 
                    }
                }
            }
        }
        var resposta = window.document.querySelector("div#resultado")
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resposta.appendChild(img)
    }



    
}