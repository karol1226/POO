

class estudiantes{
constructor (nombre,lista =["java","css","html"]){
this.nombre = nombre
this.lista=lista
}
objeto(){
  console.log('hola, mi nombre es:'+(this.nombre))
  } 

}

class estudiante{
  constructor (nombre,lista =["java","css","html"]){
  this.nombre = nombre
  this.lista=lista
  }
  objeto(){
    console.log('hola, mi nombre es:'+(this.nombre))
    } 
  
  }

const nuevo = new estudiantes("gorka" )
console.log(nuevo)
nuevo.objeto()
const nuevo_1 = new estudiante("gorka" )
console.log(nuevo_1)
nuevo.objeto()