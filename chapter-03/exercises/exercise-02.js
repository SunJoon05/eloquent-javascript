// Ejercicio => crear una funcion contarBS que tome una cadena como
// único argumento y devuelva un numero que indique cuántos
// caracteres B en mayuscula contiene la cadena

string = 'Buenos dias mi Bebe';
count = 0

// Funcion para contar cuantas B mayuscula tiene una cadena
function contarBS(string) {
    // Diferencia entre in y of en JS
    // in accede a las iteracion y of al valor de cada iteracion :D
    for (const letter of string) {
        if (letter == 'B') {
            count++
        }
    }
    // retornamos count con el valor actualizado
    return count
}


// Funcion contar caracteres y se pasa el caracter a contar como argumento
function contarCaracter(string, caracter) {
    for (const letter of string) {
        if (letter === caracter) {
            count++;
        }
    }
    return count;
}

// For común y corriente

function contar(string, caracter) {
    for (let index = 0; index < string.length; index++) {
        const element = array[index];
        if (element === caracter) {
            count++;
        }
    }
    return count;
}