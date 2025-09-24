// Função para converter preço em dólar para reais, já aplicando IOF e lucro
function converterPrecoParaReais1(
    precoEmDolar1: number,  // valor do produto em dólar
    taxaDeCambio1: number,  // cotação do dólar
    iof1: number = 6.38,    // IOF padrão de 6.38% (pode ser alterado)
    lucro1: number = 45     // lucro padrão de 45%
): { precoEmReais1: number, valorIOF1: number, precoComIOF1: number, precoVenda1: number } {

    // Conversão do dólar para reais
    const precoEmReais1 = precoEmDolar1 * taxaDeCambio1;

    // Cálculo do IOF em cima do valor em reais
    const valorIOF1 = precoEmReais1 * (iof1 / 100);

    // Valor final já com IOF
    const precoComIOF1 = precoEmReais1 + valorIOF1;

    // Preço de venda aplicando margem de lucro
    const precoVenda1 = precoComIOF1 * (1 + lucro1 / 100);

    // Retorna todos os valores calculados em forma de objeto
    return { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 };
}

// Lista de produtos com seus preços em dólar
const produtos1 = [
    { nome1: "Mouse", precoEmDolar1: 25 },
    { nome1: "Teclado", precoEmDolar1: 40 },
    { nome1: "Monitor", precoEmDolar1: 200 },
    { nome1: "HD Externo", precoEmDolar1: 100 },
    { nome1: "SSD", precoEmDolar1: 120 },
    { nome1: "Placa de Vídeo", precoEmDolar1: 500 },
    { nome1: "Processador", precoEmDolar1: 300 },
    { nome1: "Memória RAM", precoEmDolar1: 80 },
    { nome1: "Fonte", precoEmDolar1: 150 },
    { nome1: "Gabinete", precoEmDolar1: 70 },
];

// Cotação do dólar
const taxaDeCambio1 = 5.10;

// Percorre todos os produtos e mostra os cálculos no console
produtos1.forEach(produto1 => {
    const { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 } =
        converterPrecoParaReais1(produto1.precoEmDolar1, taxaDeCambio1);

    console.log(`Produto: ${produto1.nome1}`);
    console.log(`Preço em Dólares: $${produto1.precoEmDolar1.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais1.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF1.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF1.toFixed(2)}`);
    console.log(`Preço de venda (com 45% de lucro): R$ ${precoVenda1.toFixed(2)}\n`);
});
