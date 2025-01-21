function calcularJurosCompostos(principal, taxa, periodo, frequencia) {
    const taxaEfetiva = taxa / frequencia;
    const totalPeriodos = periodo * frequencia;
    const montante = principal * Math.pow((1 + taxaEfetiva), totalPeriodos);
    return montante;
  }
  
  
  
  const montanteFinal = calcularJurosCompostos(principal, taxa, periodo, frequencia);
  console.log(`Montante final após ${periodo} anos: R$${montanteFinal.toFixed(2)}`);
  