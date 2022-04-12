
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"

    // Ejemplo: [1, 4, 24, 10, 8]----->[8, 4, 1]
    //          [2, -30, 5, 3, 15]----->[3, 5, 2]
 
    var newArray = [];
    for ( let i = array.length - 1; i >= 0; i--) { // arrancando el recorrido desde la posicion cero
        // podemos usar unshift()  
        if ( 10 > array[i] && array[i] > -1 ) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

console.log(invertirOrden([1, 4, 24, 10, 8]))

function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

    // var arrayElemComun = [];
    // Ejemplo: [10, 15, 24], [2, 19, 10]----> 10
    // Deberia retornar el numero mas chicho en caso
    // de que no haya numeros en comun entre ambos arrays
    // Ejemplo: [3, 6, 10, 11], [2, 4, 5, 9]----> 2
    let aux;
    let min = 0;    
    array1.forEach(elem1 => {
        if(elem1 < min || min === 0){
            min = elem1;
        }
        array2.forEach(elem2 => {
            if(elem1 === elem2){
                aux = elem1;
            }
            if(elem2 < min) {
                min = elem2;
            }
        });
    });    
    if(!aux) {
        console.log(min);
        return min;
    }
    console.log(aux);
    return aux;
};
numeroEnComun([3, 6, 10, 11], [2, 4, 5, 9]);
// [10, 15, 24], [2, 19, 10]
 


function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    // Ejemplo: [[5, 5], 4, [10, 15], [25, 10]] ----> [10, 4, 25, 35]
    let newArray = [];
    array.forEach(elem => {
        if(Array.isArray(elem)){
            let suma = 0;
            elem.forEach(e => {
                suma += e;
            });
            newArray.push(suma);            
        } else {
            newArray.push(elem);
        }
    });
    return newArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
 // Ejemplo: (100, 4) ----> 100:4 = 25 ----> [25, 25, 25, 25])
 
 if(numero % divisor !== 0) {
    return false;
}
let cociente = numero / divisor;
let array = [];
for ( let i=0; divisor >i; i++) {
    array.push(cociente);
}
return array;
};
// mismoValorMismosElementos(100, 5)



function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido

    let numeroMenor;
    let numeroMayor;
    let returnArray = [];    
    for(let i = 0; i < array.length; i++) {
        array[0] > array[i] ?
        numeroMenor = array[i] :
        numeroMenor = array[0];
       
        if(array[0] < array[i] ) {
            numeroMayor = array[i];
        }
    };    
    // returnArray = [numeroMenor, numeroMayor];
    returnArray.push(numeroMenor);
    returnArray.push(numeroMayor);  
    return returnArray;
};
 
// elementoMenorYMayor([2, 4, 9, 1])



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};