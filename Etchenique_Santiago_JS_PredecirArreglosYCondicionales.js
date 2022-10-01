/* ------------------------------ PREDICCION 1 ------------------------------ */

function displayContactInfo() {
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
/*
        var             |           value
    authContactInfo     |   ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345]

    console
    >["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345]

*/


/* ------------------------------ PREDICCION 2 ------------------------------ */
function displayGrocerylist() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croquetas de papa");
    console.log(frozen);
}

/*
        var             |           value
        produce         |   ["manzanas", "naranjas"]
        frozen          |   ["brócoli", "helado"], ["brócoli", "helado", "croquetas de papa"]

    console
    >["brócoli", "helado", "croquetas de papa"]

*/


/* ------------------------------ PREDICCION 3 ------------------------------ */


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/*
        var             |           value
        movieLibrary    |   ["Bambi", "E.T.", "Toy Story"],["Bambi", "E.T.", "Toy Story","Zoro"],["Bambi", "Beetlejuice", "Toy Story","Zoro"]
        

    console
    >["Bambi", "Beetlejuice", "Toy Story","Zoro"]

*/