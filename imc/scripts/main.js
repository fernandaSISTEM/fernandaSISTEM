let calcImc = (peso, estatura) => peso / estatura ** 2;
calcImc(65,1.54);
calcImc(73,1.65);
let getSituacionNutricional = function(imc) {
    let situacion;if (imc < 18.5) {situacion = "Peso bajo";} else if 
    (imc < 25.0) {situacion = "Peso normal";}else if (imc < 30.0)
     {situacion = "Sobrepeso";}else if (imc < 40.0) {situacion = "Obesidad";}else
     {situacion = "Obesidad extrema";}return situacion;}
     getSituacionNutricional(27.5);
     document.getElementById('peso')
     document.getElementById(estatura)
     let elem = document.getElementById('peso')
     elem
     elem
     elem.value
     
     elem = document.getElementById('imc')
     elem
     elem.innerText = (12.34)
     
     function indiceDeMasaCorporal() {'use strict';

     let s = document.getElementById('peso').value;let peso = Number(s);
     s = document.getElementById('estatura').value;
     let estatura = Number(s);
     let imc = calcImc(peso, estatura);
     let elem = document.getElementById('imc');elem.innerText = imc.toFixed(2);
     elem = document.getElementById('situacion-nutricional');elem.innerText = getSituacionNutricional(imc);}