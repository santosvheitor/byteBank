const lista = document.querySelectorAll('[data-lista]');  //selecionou todas as listas

function selecionaCotacao(nome, valor) {
    lista.forEach((listaEscolhida) => {
        if(listaEscolhida.id == nome) {
            imprimeCotacao(listaEscolhida, nome, valor);
        }
    })
}

function imprimeCotacao(lista, nome, valor) {    
    lista.innerHTML = '';     //tira tudo que tem dentro dela, para nao correr o risco da lista ficar muito grande 
    const plurais = {
        "dolar" : "dolares", 
        "iene" : "ienes", 
        "euro" : "euros"
    }

    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listaItem = document.createElement('li');  //cria um elemento 'li' na variavel listaItem
        listaItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome : plurais[nome]}: R$${(valor * multiplicador).toFixed(2)}`
        lista.appendChild(listaItem)
    }
}

export default selecionaCotacao;