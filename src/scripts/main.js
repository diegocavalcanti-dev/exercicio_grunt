document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valorDolar = document.getElementById('valor-dolar').value;
        valorDolar = parseFloat(valorDolar);
        
        if (isNaN(valorDolar)) {
            document.getElementById('resultado').textContent = 'Por favor, insira um valor válido.';
            return;
        }

        const taxaConversao = 5.25; // Exemplo de taxa de conversão (1 USD = 5.25 BRL) PRECISO TOMAR CUIDADO DE SEMPRE ALTERAR O DÓLAR POIS ELE MUDA
        let valorReal = valorDolar * taxaConversao;
        
        document.getElementById('resultado').textContent = `O valor em Reais é: R$ ${valorReal.toFixed(2)}`;
    });
});
