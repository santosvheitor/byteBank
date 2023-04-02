addEventListener("message", event => {
    let moeda = event.data
    conectaAPI(moeda);
    setInterval(() => conectaAPI(), 5000);

})

async function conectaAPI(moeda) {
    const conecta = await fetch('http://economia.awesomeapi.com.br/last/EUR-BRL');
    const conectaTraduzido = await conecta.json();
    
    postMessage(conectaTraduzido.EURBRL);
}