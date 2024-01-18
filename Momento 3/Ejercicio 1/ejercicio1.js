'use strict'

//Ingresar un nombre con promp y verificar si el ombre ingresado se enceuntra en el vector

let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
let nombre = prompt("Ingrese un nombre");

if ( students.includes(nombre)){
    alert("Si se encuentra");
} else{
    alert("No se encuentra")
}