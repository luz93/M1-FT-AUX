const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(value){

        if(this.value === value) return this.value; //caso base
        while(this.right || this.left){ //iteracion
                if(value > this.value){
                return this.right.search(value) //recursion
                    }else{
                return this.left.search(value) //recursion
                }
            }
        return "no se encontró el valor"
        }



// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2


BinarySearchTree.prototype.height= function(height = 1){
        // if(!this.right && !this.left) {
        //     // No hay elementos, devolver profudidad actual
        //     return height;
        // } else {
        //     // Calcular profundidad máxima en cada extremo con asignación ternaria
        //     // Si el extremo no tiene elementos, se mantiene profundidad actual
        //     let lHeight = (!this.left) ? height : this.left.height(height + 1);
        //     let rHeight = (!this.right) ? height : this.right.height(height + 1);
        //     // Se devuelve el mayor de ambos extremos
        //     height = Math.max(lHeight, rHeight);
        // }
        // return height;
        if(!this.left&&!this.right) return 0;
 else if(this.right && !this.left) return 0 + this.right.size()
 else if(!this.right && this.left) return 0 + this.left.size()
 else if(this.right.size()>this.left.size()) return this.right.height() + 1
 else if (this.right.size()<this.left.size())return this.left.height() + 1
  else if (this.right.size() === this.left.size()) return this.right.height() + 1

    }

module.exports={
    BinarySearchTree
}