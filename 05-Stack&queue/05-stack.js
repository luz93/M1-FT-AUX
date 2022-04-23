const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  
//tu codigo aqui
const reverse = new Stack();   // se crea una nueva pila
/* class Stack {
    constructor() {
      this.array = [];
    }
    push(value) {
      this.array.push(value);
    }
    pop() {
      return this.array.pop();
    }
  } */
let temp = '';
for (let i = 0; i < str.length; i++) {  
                                         
    if(str[i] === ' ') {
        while(reverse.size() > 0) {
           temp += reverse.pop(); // se elimina el ultimo elemento
        }
        temp += str[i];
    }  else {
        reverse.push(str[i]); // agrega al final
    }
}
 
while(reverse.size() > 0) temp += reverse.pop();
    return temp;
};




module.exports = {
    efectoEspejo,
   
}