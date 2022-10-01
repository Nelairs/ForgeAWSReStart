// ¿Cómo sabemos que necesitamos un bucle aquí? -   Es necesario un bucle ya que se debe repetir una operacion 
// ¿Cuál es el punto de partida del bucle? - El punto de partida es 0 ya que empezaria a correr desde esta distancia
// ¿Cuándo debe detenerse el bucle? -   Debera detener luego del kilometro 10 ya que no dara mas caramelos
// ¿Cómo sabrá parar?   -   Cuando la variable del bucle supere el numero 10 en este caso
// ¿Cuál es el incremento para cada iteración del bucle?    -   El incremento deberia ser de uno en uno 
// ¿Qué variables necesitamos?  -   Se necesitara la variable de distancia 


let distance = 0;
let goal_distance   =   25; // VARIABLE PARA SETEAR DISTANCIA HACIENDO DINAMICO AL BUCLE
let max_candy_distance  =   10  //  VARIABLE ENCARGADA DE SETEAR DISTANCIA HASTA DONDE SE ENTREGA CARAMELOS

// CREACION DE UNA FUNCION ENCARGADA DE SABER SI UN NUMERO ES MULTIPLO DE OTRO OBSERVANDO EL RESTO
    let multiples_3 =   (value, multiple)   =>  {
        remainder   =   value   %   multiple
            if(value)
            if(remainder    ==  0){
                return  true;
            }
            else{
                return  false;
            }
    }

    for(let i = 0;  i < goal_distance;  i++){

        if(i > 0    &&  distance    <= max_candy_distance){
            if(multiples_3(distance,3)){
                console.log("Te ganaste un caramelo!")
            }
        }

        console.log(`Tu distancia es ${distance}`)
        distance++
    }


/* ------------------------- CARACTERISTICA STRECH 1 ------------------------ */

// let distance = 0;
// let goal_distance   =   25;
let velocity    =   5;

    // let multiples_3 =   (value, multiple)   =>  {
    //     remainder   =   value   %   multiple
    //         if(value)
    //         if(remainder    ==  0){
    //             return  true;
    //         }
    //         else{
    //             return  false;
    //         }
    // }


    for(let i = 0;  i < goal_distance;  i++){

        if(i > 0    &&  velocity > 9 && distance    <= max_candy_distance){
            // SE AGREGO AL BUCLE LA CONDICION DE LA VELOCIDAD 
            if(multiples_3(distance,3)){
                console.log("Te ganaste un caramelo!")
            }
        }

        console.log(`Tu distancia es ${distance}`)
        distance++
    }