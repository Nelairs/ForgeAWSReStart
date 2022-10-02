/* -------------------------------- DESAFIO 1 ------------------------------- */

let arr1 = [8, 6, 7, 5, 3, 0, 9];

for(let i = 0; i <= arr1.length-1; i++){
        console.log(arr1[i]);
}


/* -------------------------------- DESAFIO 2 -------------------------------- */


let arr2 = [4, 7, 13, 13, 19, 37, -2];

for(let i = 0; i <= arr2.length-1; i++){

    console.log(arr2[i] + i);
}



/* -------------------------------- DESAFIO 3 ------------------------------- */

let arr3 = [6, 2, 12, 14, -24, 5, 0];


for(let i = 0; i <= arr3.length-1; i++){

        if(arr3[i] > 5){
            console.log(arr3[i]);
        }
}

/* -------------------------------- DESAFIO 3 NINJA ------------------------------- */


for(let i = 0; i <= arr3.length-1; i++){

        if(arr3[i] < 5){
            arr3[i] = "No hay dados"
        }
        if(arr3[i] > 5){
            console.log(arr3[i]);
        }
}
