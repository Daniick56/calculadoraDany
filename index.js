

console.log('Calculadora');

/*

// Función principal del programa
function calculadora() {
    let opcion = prompt('Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada'),
        num1 = parseFloat(prompt('Ingrese el primer número:')),
        num2,
        resultado;
  
    if (opcion !== '5' && opcion !== '7') {
      num2 = parseFloat(prompt('Ingrese el segundo número:'));
    }
  
    alert(
      'la operacion es ' +
        opcion +
        ' el primer valor es ' +
        num1 +
        ' el segundo valor es ' +
        num2
    );
  }
  
  // Llamar a la función principal
  calculadora();

  */

  // Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function factorial(num1) {
  for( let i = num1 - 1 ; i > 0 ; i--){
    num1 *= i
}
return num1
}

function exponente (num1, exponenteNum) {
  return num1**exponenteNum
}

function raizCuadrada (num1) {
  return num1**0.5
}

// Función principal del programa
function calculadora() {
  let opcion = prompt(
    "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
  );
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2,
      resultado;

  if (opcion !== "5" && opcion !== "6" && opcion !== "7") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
  }

  switch (opcion) {
    case "1":
      resultado = sumar(num1, num2);
      break;
    case "2":
      resultado = restar(num1, num2);
      break;
    case "3":
      resultado = multiplicar(num1, num2);
      break;
    case "4":
      resultado = dividir(num1, num2);
      break;
    case "5":
      resultado = factorial(num1);
      break;
    case "6":
      let exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
      resultado = exponente(num1, exponenteNum);
      break;
    case "7":
      resultado = raizCuadrada(num1);
      break;
    default:
      resultado = "Opción no válida";
      break;
  }

  alert("El resultado es: " + resultado);
}

// Llamar a la función principal
calculadora();