let numberOne
let numberTwo

do {
  numberOne = Number(prompt("Digite o primeiro número:"))
  if(isNaN(numberOne)){
    alert("Digite um número válido")
  }
} while(isNaN(numberOne));

do{
  numberTwo = Number(prompt("Digite o segundo número:"))
  if(isNaN(numberTwo)){
    alert("Digite um número válido")
  }
} while(isNaN(numberTwo))

const sum = function(number1, number2){
  return number1 + number2
}

const sub = function(number1, number2){
  return number1 - number2
}

const mul = function(number1, number2){
  return number1 * number2
}

const div = function(number1, number2){
  return number1 / number2
}

const rest = function(number1, number2){
  return number1 % number2
}

alert(`A soma dos números é ${sum(numberOne, numberTwo)}`)
alert(`A subtração dos números é ${sub(numberOne, numberTwo)}`)
alert(`A multiplicação dos números é ${mul(numberOne, numberTwo)}`)
alert(`A divisão dos números é ${div(numberOne, numberTwo)}`)
alert(`O resto da divisão dos números é ${rest(numberOne, numberTwo)}`)

function pairOrNot(number){
  if(number % 2 === 0){
    alert(`O número ${number} é par`)
  }

  else{
    alert(`o número ${number} é ímpar`)
  }
}

let pairResult1 = pairOrNot(numberOne)
let pairResult2 = pairOrNot(numberTwo)

const iqualNumbers = function(number1, number2){
  if(number1 === number2){
    alert("Os números inseridos são iguais")
  }

  else{
    alert("Os números inseridos são diferentes")
  }
}

iqualNumbers(numberOne, numberTwo)