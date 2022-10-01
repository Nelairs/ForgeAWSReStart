/*
SUBETE A ESE JUEGO

-Se debe crear una app para saber si un nino puede o no subir al juego
-Si la altura del nino es mayor a se printea "Subete, chico!". Si no es mayor se printea "Lo siento, chico. Tal vez el próximo año"

*/



/* ------------------------ Ejercicio Base------------------------ */


let height = 0; //  SE DEFINE LA VARIABLE DE LA ALTURA

let age = 0; // SE DEFINE LA VARIABLE DE EDAD

    if( height   >   52  ){
        console.log("Subete, chico!");
    }
    else{
        console.log("Lo siento, chico. Tal vez el próximo año");
    }

/* ------------------------ CARACTERISTICA STRETCH 1 ------------------------ */
// SE AGREGA EL OPERADOR AND (&&) PARA QUE SEA NECESARIO CUMPLIR LAS DOS CONDICIONES

    if( height   >   52  && age >   10){
        console.log("Subete, chico!");
    }
    else{
        console.log("Lo siento, chico. Tal vez el próximo año");
    }

/* ------------------------- CARACTERISTICA STRECH 2 ------------------------ */

// SE AGREGA EL OPERADOR OR (||) PARA QUE SEA NECESARIO CUMPLIR UNA DE LAS DOS CONDICIONES O AMBAS


    if( height > 52 || age > 10 ){
        console.log("Subete, chico!");
    }
    else{
        console.log("Lo siento, chico. Tal vez el próximo año");
    }