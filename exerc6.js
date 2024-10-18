let idade = 23
 
switch (true) {
    case (idade >= 0 && idade <=12):
        console.log('Você é criança');
        break;
    case (idade >= 13 && idade <=18):
        console.log('Você é adolecente');
        break;
    case (idade >= 19 && idade <=59):
        console.log('Você é adulto');
        break;
    case (idade >= 60):
        console.log('Você é idoso');
        break;

    default:
        console.log("Insira uma idade válida");
        break;
}