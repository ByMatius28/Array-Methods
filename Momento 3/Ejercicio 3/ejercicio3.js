'use strict'

//En base al resultado del ejercicio anterior agrupar en un array únicamente las
//palabras que tengan mas de 3 letras.

let phrase = ' La programacion web es fundamental para el progreso';
let words = phrase.split(' ');
let filterwords = words.filter(word => word.length > 3 );

alert('Las palabras que tienen 3 letras son: ' + filterwords);
