let produto = Number(prompt(`Informe o valor do produto:`))
let desconto = prompt(`Informe o código promocional que você quer: 'DESC1', 'DESC2', 'DESC3', 'DESC4' ou 'DESC5'`)

switch (desconto.toUpperCase()) {
    case 'DESC1':
        alert(`05% de desconto.\nValor original do produto: R$ ${produto}.\nValor com desconto: R$ ${produto - (produto * 0.05)}`)
        break;
    case 'DESC2':
        alert(`10% de desconto.\nValor original do produto: R$ ${produto}.\nValor com desconto: R$ ${produto - (produto * 0.10)}`)
        break;
    case 'DESC3':
        alert(`15% de desconto.\nValor original do produto: R$ ${produto}.\nValor com desconto: R$ ${produto - (produto * 0.15)}`)
        break;
    case 'DESC4':
        alert(`20% de desconto.\nValor original do produto: R$ ${produto}.\nValor com desconto: R$ ${produto - (produto * 0.20)}`)
        break;
    case 'DESC5':
        alert(`25% de desconto.\nValor original do produto: R$ ${produto}.\nValor com desconto: R$ ${produto - (produto * 0.25)}`)
        break;

    default:
        alert(`Erro! Cupom inválido!`)
        break;
}