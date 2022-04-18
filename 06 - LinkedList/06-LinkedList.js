const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
    return this.len
  }
    // -----------------
  //   var size = 0
    
  //   if(!this.head){
  //     return size;
  //   } else {
  //     var puntero = this.head
  //     size = size + 1
  //     while (puntero.next){
  //       puntero = puntero.next
  //       size = size + 1
  //     }
  //   } return size
  // }
// -----------------------------------------
  // let oCurrent = this.head
  // let nCounter = 1
  // if (!this.head) return 0
  // while (oCurrent.next) {
  //   oCurrent = oCurrent.next
  //   nCounter++
  // }
  // return nCounter
  // }

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:
    //this.head = primer nodo 
      let current = this.head; // 6
      if(!this.head) return 'La lista se encuentra vacia' //this.head === null
      while(current.next){ //current.next !== null
      if(current.value < current.next.value){
        let aux = current.value; // 2
        current.value = current.next.value; // 7
        current.next.value = aux;// 7 ---> 2
        return this.orderList();
        } else{
        current = current.next
       }
      }
      return LinkedList
      };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function(data,pos) {
	


}
  




module.exports={
  LinkedList
}



