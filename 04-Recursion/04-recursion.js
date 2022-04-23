// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  if ( array.length === 0 ) return true;
  // array = [1, 2, 5]
  return array.shift()*producto(array) // 1*2*5*1
  // array = [ 2, 5]
  // array = [5]   
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
  //    prop2:{value:5}     
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 



const isThere = function (obj, value){
  //escribe aqui tu codigo 
  for ( let key in obj) {
    if ( typeof obj[key] === "object") {
      return isThere(obj[key], value);
    }
    if ( obj[key] === value) return true;
  }
  return false;
};
module.exports = { producto, isThere };
