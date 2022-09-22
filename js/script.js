var calcular = document.getElementById("botaocalcular");
var resultado = document.getElementById("resultado");

function calcularArea() {
  var areaterrenoNC = document.getElementById("areaterrenoNC").value;
  var areaterrenoC = document.getElementById("areaterrenoC").value;
  var corretor = 0.06;

  var valorterreno = (areaterrenoC * 1800) + (areaterrenoNC * 260);
  var valorcorretor = valorterreno * corretor;

  valor.innerText = "O valor total do terreno corresponde há " + valorterreno + " reais.";
  juroscorretor.innerText = "O juros do corretor corresponde há " + valorcorretor + " reais.";
}
calcular.addEventListener('click', calcularArea);