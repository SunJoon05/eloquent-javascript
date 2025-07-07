function board(size) {
    let character = "#"
    let space = " "

    for (let row = 0; row < size; row++) {
        let line = "";
        for (let char = 0; char < size; char++) {
            // crear la linena alternando entre espacio y caracter y usar como guia la fila 
            if ((row + char) % 2 === 0) {
                line += space
            } else {
                line += character
            }
        }
        console.log(line);

    }
}