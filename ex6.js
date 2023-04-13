/**
 * Poniéndolo todo junto
 */

function existePez(listaPeces, pezBuscado) {
    let pezEncontrado = false
    let i = 0

    while(!pezEncontrado && i<listaPeces.length) {
        pezEncontrado = (listaPeces[i] === pezBuscado) 
        i++      
    }

    return pezEncontrado
}

let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
let he_encontrado_al_pez = existePez(muchos_peces, "Estrella")

console.log("He encontrado al pez?: " + he_encontrado_al_pez)
/**
 * Ejecuta el código.
 * Esta functión debería devolver "true"; puesto que "Estrella"; efectivamente está en el array.
 * Sin embargo devuelve false. Hay dos errores:
 * 
 * 1. Un error que impide ejecutar el código. Vigila la información que arroja el TERMINAL
 * 2. Un error lógico; que hace que el código no devuelve lo que debería devolver.
 * 
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso
 * ----------------------------------------------------------------------------------------------------------------------------
 */


// SOLUCIÓN 1:
//en el bucle while el .lenght-1 omite el ultimo elemento del array, hay que borrarlo y dejarlo sin el -1 para que recorra todos los elementos del array.

// SOLU
// El segundo error es que la condición en la asignación de la variable pezEncontrado debería ser listaPeces[i] === pezBuscado en lugar de listaPeces[i] == pezBuscado. La comparación estricta (===) compara el valor y el tipo de datos, mientras que la comparación no estricta (==) sólo compara el valor. Es importante utilizar la comparación estricta en la mayoría de los casos para evitar errores sutiles en la comparación de valores.
