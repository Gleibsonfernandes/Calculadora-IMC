//pagar todos os elementos que vamos interagir 

//deixar apenas essa variavel global

const calcular = document.getElementById('calcular');

function calculoImc(){

    //deixar essas variraveis apenas no escopo da função caluloImc
const nome = document.getElementById('nome').value;//usamos no final o .value para obter apenas o valor do elemento
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById( 'resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorImc = (peso/(altura*altura)).toFixed(1);

        let classificacao='';


        if(valorImc < 18.5){
            classificacao = 'abaixo do peso.'
        }
        else if(valorImc < 25){
            classificacao = 'no peso ideal.'
        }
        else if(valorImc< 30){
            classificacao ='levemente acima do peso.'
        }
        else if(valorImc<35){
            classificacao='com besidade tipo I.'
        }
        else if(valorImc<40){
            classificacao='com obesidade tipo II.'
        }
        else{
            classificacao='com obesidade tipo III, CUIDADO!!'
        }

        resultado.textContent = `${nome}, seu IMC é ${valorImc} você está ${classificacao} `

       
        
    }
    else{
        resultado.textContent = "Preencha todos os campos!!";//textcontent para retornar um texto
    }



}



// no elemento calcular, adicione um eventlist quando clicar execute a função calcImc
calcular.addEventListener('click', calculoImc);