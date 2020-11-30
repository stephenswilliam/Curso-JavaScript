var agora = new Date()
var diaSemana = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/
switch (diaSemana) {
    case 0:
        console.log(`${diaSemana} = Domingo`)
        break;
    case 1:
        console.log(`${diaSemana} = Segunda-feira`)
        break;
    case 2:
        console.log(`${diaSemana} = Terça-feira`)
        break;
    case 3:
        console.log(`${diaSemana} = Quarta-feira`)
        break;
    case 4:
        console.log(`${diaSemana} = Quinta-feira`)
        break;
    case 5:
        console.log(`${diaSemana} = Sexta-feira`)
        break
    case 6:
        console.log(`${diaSemana} = Sábado`)
        break
    /* O default é opcional */
    default:
        console.log(`[ERRO] ${diaSemana} = Dia Inválido`)
        break;
    
 }