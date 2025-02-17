const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
    // Tu código aca:
    //Queue( colas): FIFO 
  let arraPerson = []; // nombre de las personas que complen los requisitos
  let numTicket = []; // numero de ticket de los que ingresan
    while (queue.size() > 0 ){
      let fila = queue.dequeue()  // eliminamos el primer elemento de la fila
          if ( fila.age >= 18 && 
                fila.ticket.event === event &&
                !numTicket.includes(fila.ticket.number)) {  // el metodo includes no da true o false si el elemengto esta incluido
                numTicket.push(fila.ticket.number );
                arraPerson.push(fila.fullname);
          }   
  }
    
        return arraPerson;
  };
      
  

  module.exports = {
    controlAcces,
   
}