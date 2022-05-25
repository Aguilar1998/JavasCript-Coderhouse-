function mate(ingrediente_1, ingrediente_2, ingrediente_3, elSuperPreferido) {
    return “La mejor forma de preparar un mate es: \n 1-Llenar un termo con ” + “agua ” +” caliente. Para que la temperatura de tu mate esté en su punto justo, asegurate de que no esté ni tibia ni hirviendo… \n” + ” 2-Colocar la “ + ingrediente_1 + ” dentro del mate, “ + ” preferentemente el que el publico elije es la “ + elSuperPreferido + ”, luego agregarle algun yuyos como “ + ingrediente_2 +  ” y agitar… \n 3-Le sacamos el polvo y luego le colocamos el “ + ingrediente_3 + ” \n 4- Introducimos la bombilla \n 5- Cebamos y compartimos un momento.”
}
    
    const pasos \= () \=> {
    
    let numRonda \= parseInt(
    
    prompt(“Ingrese la cantidad de personas en la ronda”)
    
    );
    
    var ingrediente_1 \= prompt(
    
    “El ingrediente que va primero es: \n Paso 1 (yerba) “
    
    ).toLowerCase();
    
    var ingrediente_2 \= prompt(
    
    “El ingrediente que va segundo es: \n Paso 2 (yuyo)”
    
    ).toLowerCase();
    
    var ingrediente_3 \= prompt(
    
    “El ingrediente qeu va tercero es: \n Paso 3 (agua) “
    
    ).toLowerCase();
    
    materos(numRonda, ingrediente_1, ingrediente_2, ingrediente_3);
    
    };
    
    const materos \= (numRonda, ingrediente_1, ingrediente_2, ingrediente_3) \=> {
    
    var elSuperPreferido \= 0;
    
    for (let i \= 1; i <= numRonda; i++) {
    
    let preferencia \= prompt(
    
    `Ingrese el tipo de yerba que prefiere \n Nro: #${i}`
    
    ).toLowerCase();
    
    let elPreferido1 \= 0;
    
    let elPreferido2 \= 0;
    
    let elPreferido3 \= 0;
    
    let elPreferido4 \= 0;
    
    // Comparo las preferencias y la asigno a una sola variable par aluego mostrar la preferida
    
    switch (preferencia) {
    
    case “yerbamate”:
    
    elPreferido1 += 1;
    
    break;
    
    case “aguantadora”:
    
    elPreferido2 += 1;
    
    break;
    
    case “taragui”:
    
    elPreferido3 += 1;
    
    break;
    
    case “rosamonte”:
    
    elPreferido4 += 1;
    
    break;
    
    }
    
    if (elPreferido1 > elPreferido2) {
    
    elSuperPreferido \= “yerbamate”;
    
    } else if (elPreferido2 > elPreferido3) {
    
    elSuperPreferido \= “aguantadora”;
    
    } else if (elPreferido3 > elPreferido4) {
    
    elSuperPreferido \= “taragui”;
    
    } else {
    
    elSuperPreferido \= “rosamonte”;
    
    }
    
    }
    
    console.log(
    
    mate(ingrediente_1, ingrediente_2, ingrediente_3, elSuperPreferido)
    
    );
    
    };
    
    pasos();