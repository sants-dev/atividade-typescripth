var camisa = 99;
var desconto = 0.30;
var valordesconto = camisa * desconto;
var valorfinal = camisa - valordesconto;
console.log("Preço original: R$", camisa.toFixed(2));
console.log("Desconto: R$", valordesconto.toFixed(2));
console.log("Preço final com desconto: R$", valorfinal.toFixed(2));
