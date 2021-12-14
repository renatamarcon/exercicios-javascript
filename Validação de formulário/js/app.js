//Importa a função principal do outro arquivo js, que comanda a validação dos campos. Ela detecta os erros e configura as mensagem próprias.
import { valida } from './validacao.js'

//Pega o valor que entra nos inputs de novo, pra funcionar pra esse doc também.
const inputs = document.querySelectorAll('input')

//Vai fazer uma validação da página de cadastro de produtos. Dessa vez, vai usar uma MÁSCARA pra auxiliar no cadastro dos produtos. 
//Isso também existe pronto no github, e é só ir removendo o que não for necessário pra essa validação em questão.
inputs.forEach(input => {

    if(input.dataset.tipo == 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        }) 
    }

    //Cria um evento pra quando o campo sendo digitado sai de foco, e é aí que ele ativa a validação pra todos os outros campos.
    //Estando aqui, e no final, ele funciona automaticamente pra todos os campos, independente de estar na página de cadastro de pessoas ou de produtos.
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})