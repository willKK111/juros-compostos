function calcularJurosCompostos(principal, taxa, periodo, frequencia) {
  const taxaEfetiva = taxa / frequencia;
  const totalPeriodos = periodo * frequencia;
  const montante = principal * Math.pow((1 + taxaEfetiva), totalPeriodos);
  return montante;
}

// Exemplo de uso
const principal = 1000; // Capital inicial
const taxa = 0.05; // Taxa de juros anual (5%)
const periodo = 10; // Período em anos
const frequencia = 12; // Frequência de capitalização (mensal)

const montanteFinal = calcularJurosCompostos(principal, taxa, periodo, frequencia);
console.log(`Montante final após ${periodo} anos: R$${montanteFinal.toFixed(2)}`);

module.exports = {calcularJurosCompostos};