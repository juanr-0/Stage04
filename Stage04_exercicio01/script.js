let number_01 = Number(prompt("Digite o primeiro número?"))
let number_02 = Number(prompt("Digite o segundo número?"))


alert(`A soma é :${number_01 + number_02}`)
alert(`A subtração é :${number_01 - number_02}`)
alert(`A multiplicação é :${number_01*number_02}`)
alert(`A divisão é :${number_01/number_02}`)
alert(`o resto da divisão :${number_01%number_02}`)


let soma =(number_01+number_02)
if (soma%2 == 0) {
    alert(`O resultado da soma é ${soma} e esse número é: par`) 
} else { 
    alert(`O resultado da soma é ${soma} e esse número é: ímpar`)
}


if (number_01 == number_02) {
  alert(`Os dois número inseridos foram ${number_01} e ${number_02} e eles são iguais`)
} else{
  alert(`Os dois número inseridos foram ${number_01} e ${number_02} e eles são diferentes`)
}