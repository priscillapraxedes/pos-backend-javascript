let operador = "+"
let num1 = 1
let num2 = 2

switch (operador) {
    case "+":
        resultado = num1 + num2
        break
    case "-":
        resultado = num1 - num2
        break
    case "*":
        resultado = num1 * num2
        break
    case "/":
        resultado = num1 / num2
        break
    default:
        resultado = "Erro ao calcular"
    
}

console.log(resultado)