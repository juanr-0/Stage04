
let students = [
  {name: "Joao", nota_01: 4, nota_02: 7},
  {name:"Lucas", nota_01: 7, nota_02: 7},
  {name:"Maria", nota_01: 8, nota_02: 4}  
];

function media(nota_01, nota_02) {
  let nota_media = (Number(nota_01)+Number(nota_02))/2;
    return nota_media
}

for (let index = 0; index < students.length; index++) {
  
  let resultado_media = media(students[index].nota_01,students[index].nota_02)
  
  if (resultado_media>=7){
      alert(`A média do aluno(a) ${students[index].name} foi de: ${resultado_media}
      Parabéns ${students[index].name}! Você foi aprovado(a) no concurso`)  
  } 
    else {
      alert(`A média do aluno(a) ${students[index].name} foi de: ${resultado_media}
      Não foi dessa vez ${students[index].name}! Tente novamente!`) 
  }
}

