let altura = prompt(`Informe sua altura em metros:`)
let peso = prompt(`Informe seu peso em quilogramas:`)

let imc = peso / (altura * altura) 

if(imc > 18.5 && imc < 24.9){
    alert(`Seu IMC é ${imc.toFixed(2)}, você está dentro do intervalo saudável!`)
}

else{
    alert(`Seu IMC é ${imc.toFixed(2)}, você não está dentro do intervalo saudável!`)
}

