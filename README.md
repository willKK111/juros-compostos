# Juros Compostos

Este projeto é destinado ao cálculo de juros compostos com base em diferentes taxas de juros e períodos de tempo. Ele permite que os usuários insiram o capital inicial, a taxa de juros, o período e a frequência de capitalização para calcular o montante final após o período especificado.

## Funcionalidades
- **Calcular Juros Compostos Simples:** Realiza o cálculo de juros compostos com uma taxa fixa ao longo de um período.
- **Calcular Juros Compostos Composto:** Suporta a capitalização dos juros em diferentes frequências (anual, semestral, trimestral, mensal, etc.).
- **Interface Gráfica:** Facilita a entrada de dados e exibição dos resultados.

## Exemplos de Entrada e Saída Esperados

### Exemplo 1
- **Entrada:**
  - Capital inicial: R$1000
  - Taxa de juros anual: 5% (0.05)
  - Período: 10 anos
  - Frequência de capitalização: Mensal (12)

- **Saída:**
  - Montante final após 10 anos: R$1647.01

### Exemplo 2
- **Entrada:**
  - Capital inicial: R$500
  - Taxa de juros anual: 8% (0.08)
  - Período: 5 anos
  - Frequência de capitalização: Trimestral (4)

- **Saída:**
  - Montante final após 5 anos: R$745.53

## Instruções de como rodar o código localmente

### Pré-requisitos
- Node.js instalado

### Passos para executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/juros-compostos.git
2. cd juros-compostos
3. npm install
4. node src/calculo.js
