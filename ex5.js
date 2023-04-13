/**
 * Métodos de Array útiles
 *
 * JavaScript nos propociona una serie de métodos que realizan muchas de las tareas que se necesita hacer de manera habitual, como buscar un elemento en un array, con funciones ya predefinidas.
 *
 * Si bien es MUY CONVENIENTE saber como recorrer un array y buscar un elemento en él, de manera "manual"; el uso de funciones a más alto nivel nos permite ahorrar líneas de código y hacer nuestro código más legible
 */

/**
 * Mira algunos ejemplos de uso de la función "includes"
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes
 *
 */
let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"];

console.log(muchos_peces.includes("Nemo"));
console.log(muchos_peces.includes("Pepitillo"));

/**
 * CONTESTA: ¿Por qué el primer console log arroja el valor "true" y el segundo arroja el valor "false"?
 * Porque en el primer console.log, si existe un elemento del array que se llama "Nemo" y en cambio, el segundo retorna false porqué no existe en el array un elemento que se llame "pepitillo"
 * CONTESTA: ¿Que TIPO de dato devuelve la función 'includes' (number, string, boolean o array)? 
 * El método includes() de JavaScript devuelve un valor booleano (true o false) que indica si un elemento específico se encuentra en un arreglo o no.
Si el elemento está presente en el arreglo, el método devuelve true. Si no está presente, devuelve false.
 */
