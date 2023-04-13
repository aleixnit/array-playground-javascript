/**
 * indexOF
 */

/**
 * LA función indexOf es muy usada en JavaScript; y en otros lenguajes de programación hay funciones similares. Sirve para indicar, en que posición se encuentra un elemento en un array
 */

let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"];
let pezPosicion = muchos_peces.indexOf("Nemo");
console.log("Nemo está en la posición: " + pezPosicion);

/**
 * Fíjate sin embargo qué valor arroja aplicar indexOf cuando buscamos a "estrella". CONTESTA: ¿Por qué crees que sucede esto?
 */
// Porque javascript es key sensitive y el string no respeta la primera mayuscula de la E.
// Significa que el elemento "estrella" no se encuentra en el arreglo muchos_peces.
// El método indexOf devuelve el índice del primer elemento en el arreglo que coincide con el valor pasado como argumento. Si el elemento no se encuentra en el arreglo, el método devuelve -1.
let pezPosicion2 = muchos_peces.indexOf("estrella");
console.log("Estrella está en la posición: " + pezPosicion2);
