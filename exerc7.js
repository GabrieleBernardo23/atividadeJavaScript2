let num1 = parseInt(prompt("Insira um número:"))
let num2 = parseInt(prompt("Insira outro número:"))
let elemento = prompt("Escolha se será uma 'soma', 'subtração', 'divisão' ou 'multiplicação':")

switch (elemento) {
    case "soma":
        alert(`Resultado ${num1 + num2}`); 
        break;
    case 'subtração':
        alert(`Resultado ${num1 - num2}`); 
        break;
    case 'divisão':
        alert(`Resultado ${num1 / num2}`); 
        break;
    case 'multiplicação':
        alert(`Resultado ${num1 * num2}`); 
        break;

    default:
        alert('Tente novamente')
        break;
}