// Definir una funcion min que toma dos argumentos y devuelve su minimo
function min(a, b) {
    let value = 0
    a < b ? value = a : value = b
    return value
}

console.log(min(5, 2));