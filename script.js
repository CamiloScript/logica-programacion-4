function generarFibonacci() {
  // Se generan las variables DOM para el input, ademas de convertir a numero entero cualquier numero ingresado para obtener datos precisos.
  const input = document.getElementById("numberInput").value;
  const number = parseInt(input);
  // Se genera un verificador para que pueda revisar si el dato ingresado a traves de input es un numero, si no es un numero se envía una alerta indicando que el dato ingresado no es valido.
  if (isNaN(number) || number <= 0) {
    alert("Dato incorrecto! Por favor, ingresa un número válido.");
    return;
  }
  const fibonacciSeries = getFibonacciSeries(number);
  displayResult(fibonacciSeries);
}

// Se genera la función para realizar el calculo de fibonacci del numero ingresado en Input.
function getFibonacciSeries(n) {

  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  } // Retorna una serie de numeros que se separan gracias a la función slice.
  return series.slice(0, n);
}

// Se genera la función displayResult(), para que pueda generarse la serie de numeros de fibonacci del numero ingresado en el input como una lista y se vayan agregando los numeros calculados a la lista con la función Join.
function displayResult(series) {
  const resultDiv = document.getElementById("resultado");
  resultDiv.innerHTML = `Serie de Fibonacci: ${series.join(", ")}`;
}
