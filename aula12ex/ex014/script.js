function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = 'rgba(212, 199, 76, 0.829)'
    } else {
        if (hora < 18) {
            img.src = 'tarde.jpg' 
            document.body.style.background = 'rgba(143, 144, 212, 0.829)'
        } else {
            img.src = 'noite.jpg'
            document.body.style.background = 'rgba(5, 37, 21, 0.829)'
    
        }
    }
}
