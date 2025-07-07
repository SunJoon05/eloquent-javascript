function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        // iniciar cadena vacia para la salida
        output = "";

        // evaluar las excepciones
        output += i % 3 === 0 ? "Fizz" : "";
        output += i % 5 === 0 ? "Buzz" : "";

        // mostrar la salida segun la condicion
        console.log(output || i);
    }
}