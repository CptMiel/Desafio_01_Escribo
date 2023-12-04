function somatorioDivisiveis3ou5(n) {
    var somatorio = 0;
    var numerosSomados = [];

    for (var i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
            numerosSomados.push(i);
        }
    }

    return { somatorio, numerosSomados };
}

function calcularSomatorio() {
    const userInput = document.getElementById('numInput').value;
    const resultElement = document.getElementById('result');
    const userNumElement = document.getElementById('userNum');
    const numerosSomadosElement = document.getElementById('numerosSomados');

    if (userInput.trim() === '') {
        alert('Por favor, insira um número.');
        return;
    }

    const userNum = parseInt(userInput, 10);
    const resultado = somatorioDivisiveis3ou5(userNum);
    
    userNumElement.innerText = userNum;  
    resultElement.innerText = resultado.somatorio;
    numerosSomadosElement.innerText = resultado.numerosSomados.join(', ');
    
}