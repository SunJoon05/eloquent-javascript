// Defina una funcion recursiva isEve() que corresponda a esta descripcion. la funcion debe aceptar solo un paramaetro numero entero positivo y devolver un booleano

function isEven(n) {
    if (n === 0) return true; // cero es par por definicion
    else if (n === 1) return false; // uno es impar por definicion
    else return isEven(n - 2); // para cualquier paridad n - 2
}