function triangle(rows) {
    for (let i = 0; i < rows; i++) {

        let spaces = "";
        let split = "";

        for (let spc = 0; spc < rows - i; spc++) {
            spaces += " ";
        }
        for (let spt = 0; spt < (i * 2) + 1; spt++) {
            split += "*";
        }
        let result = spaces + split;
        console.log(result);
    }
}

triangle(6);