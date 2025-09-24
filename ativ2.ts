const camisa: number = 99;
const desconto: number = 0.30;
const valordesconto: number = camisa * desconto;

const valorfinal: number = camisa - valordesconto;

console.log("Preço original: R$", camisa.toFixed(2));
console.log("Desconto: R$", valordesconto.toFixed(2));
console.log("Preço final com desconto: R$", valorfinal.toFixed(2));
