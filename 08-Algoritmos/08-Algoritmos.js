'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
 
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 
}


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){ // [ 5, 1, 4, 2, 8]
    return array;
  }
  // ubicamos de forma aleatoria el pivot:
  var pivot = Math.floor((Math.random()*array.length)); // pivot = 1
  // La función Math.random() retorna un punto flotante, 
  // un número pseudo-aleatorio dentro del rango [0, 1).
  // Math.floor() devuelve el máximo entero menor o igual a un número.
  var right = []; // array = [left , pivot, right]  [5, 4, 2, 8 ]
  var left = []; // []
  for(let i = 0; i < array.length ; i++){ // recorremos el array
    if(i !== pivot) {
      if(array[i] < array[pivot]) {
        left.push(array[i]);        
      } else {
        right.push(array[i]);
      }
    }
  }  
  return [].concat(quickSort(left), array[pivot], quickSort(right)); // recursion


}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};