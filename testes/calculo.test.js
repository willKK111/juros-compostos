const calcularJurosCompostos = require('./calculo');

// Teste para calcular o montante com valores positivos
test('calcula o montante corretamente com valores positivos', () => {
  const principal = 1000; // Capital inicial
  const taxa = 0.05; // Taxa de juros anual (5%)
  const periodo = 10; // Período em anos
  const frequencia = 12; // Frequência de capitalização (mensal)

  const montanteEsperado = 1647.01;
  const montanteFinal = calcularJurosCompostos(principal, taxa, periodo, frequencia);

  expect(montanteFinal).toBeCloseTo(montanteEsperado, 2);
});

// Teste para calcular o montante com taxa de juros zero
test('calcula o montante corretamente com taxa de juros zero', () => {
  const principal = 1000; // Capital inicial
  const taxa = 0; // Taxa de juros anual (0%)
  const periodo = 10; // Período em anos
  const frequencia = 12; // Frequência de capitalização (mensal)

  const montanteEsperado = 1000;
  const montanteFinal = calcularJurosCompostos(principal, taxa, periodo, frequencia);

  expect(montanteFinal).toBeCloseTo(montanteEsperado, 2);
});

