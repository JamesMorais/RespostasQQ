

function calcularArea() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const resultado = document.getElementById('resultado1');
    if (comprimento > 0 && largura > 0) {
        let area = comprimento * largura;
        resultado.innerHTML = `A área do terreno é: ${area} metros quadrados`
    } else {
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularQtdFerraduras() {
    const cavalos = parseInt(document.getElementById('cavalos').value);
    const resultado = document.getElementById('resultado2');

    if (cavalos > 0) {
        let ferraduras = cavalos * 4;
        resultado.innerHTML = `São necessários ${ferraduras} ferraduras!`
    }
    else {
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularDadosHtpao() {
    const paes = parseInt(document.getElementById('paes').value);
    const broas = parseInt(document.getElementById('broas').value);
    const resultado = document.getElementById('resultado3');
    let total = 0;
    if (paes >= 0 && broas >= 0) {
        total = (paes * 0.12 + broas * 1.50)
        let porcentagem = total * (10 / 100);
        resultado.innerHTML = `O total da arrecadação com pães e broas foi de ${total} e e deve guardar ${porcentagem.toFixed(2)} na conta poupança`
    } else {
        resultado.innerHTML = 'Digite valores válidos'
    }
}
function calcularDiasDeVida() {
    const nome = document.getElementById('nome').value.toUpperCase();
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado4');

    if (nome !== '' && idade > 0) {
        let qtdDias = idade * 365
        resultado.innerHTML = `${nome}, VOCÊ JÁ VIVEU ${qtdDias} DIAS`

    } else {
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularQtdLitros() {
    const preco = parseFloat(document.getElementById('preco').value);
    const pagamento = parseFloat(document.getElementById('pagamento').value);
    const resultado = document.getElementById('resultado5');

    if (preco > 0 && pagamento > 0) {
        let litros = pagamento / preco
        resultado.innerHTML = `Foi possível colocar ${litros.toFixed(1)} litro(s).`
    } else {
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularValorkg() {
    const peso = parseFloat(document.getElementById('peso').value);
    resultado = document.getElementById('resultado6');

    if (peso > 0) {
        let valor = peso * 12
        resultado.innerHTML = `O valor a ser page é: ${valor.toFixed(2)} reais`
    } else {
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularDiasPassados() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    resultado = document.getElementById('resultado7');

    if (dia > 0 && mes > 0) {
        let diasPassados = (mes - 1) * 30 + dia;
        resultado.innerHTML = `Passaram ${diasPassados} dias desde o início do ano.`
    }
    else {
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularMediaP() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    resultado = document.getElementById('resultado8');

    let peso1 = 1;
    let peso2 = 2;
    let peso3 = 3;

    if (nota1 >= 0 && nota2 >= 0 && nota3 >= 0) {
        let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
        resultado.innerHTML = `Média ponderada das notas: ${media}`
    } else {
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularValorArrecadado() {
    const p = parseInt(document.getElementById('p').value);
    const m = parseInt(document.getElementById('m').value);
    const g = parseInt(document.getElementById('g').value);
    resultado = document.getElementById('resultado9')

    if (p >= 0 && m >= 0 && g > 0) {
        let total = (p * 10 + m * 12 + g * 15);
        resultado.innerHTML = `O valor arrecadado é de ${total} reais`
    }else{
        resultado.innerHTML = 'Digite um valor válido'
    }
}
function calcularDistanciaPC(){
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('x1').value);
    resultado = document.getElementById('resultado10')

    let distanciaX = x2-x1
    let distanciaY = y2 - y1;

    let distancia = Math.sqrt(distanciaX*distanciaX+distanciaY*distanciaY);

    resultado.innerHTML = `Resultado: ${distancia}`
}