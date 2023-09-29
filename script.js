document.getElementById("EnvBtn").onclick = function Geral(){

  var ValA = parseFloat(document.getElementById("VlA").value);
  var ValB = parseFloat(document.getElementById("VlB").value);
  var ValC = parseFloat(document.getElementById("VlC").value);
  function calcular(a, b, c){
const delta = (b**2)-4*a*c
const x1 = (-b + Math.sqrt(delta))/(2*a) 
const x2 = (-b - Math.sqrt(delta))/(2*a)
const xvert = -b / (2*a)
const yvert = -delta/4*a
 if (delta < 0) {
  document.getElementById('resultado').innerHTML = ('Essa função não possui raízes reais!')
 }else{
  document.getElementById('resultado').innerHTML = `Seu delta é ${delta}<br>
    x1 = ${x1}<br>
    x2 = ${x2}<br>
    Valor de x no vértice = ${xvert}<br>
    Valor de y no vértice = ${yvert}<br>`; 
    
      }
  }
  calcular(ValA, ValB, ValC)
}

  

