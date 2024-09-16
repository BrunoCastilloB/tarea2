//Ejercicio 7 Arrays
//1
let numeros = [1, 2, 3, 4, 5, 6];
let sum = 0;
function sumararray(listanumeros){
  for (let i = 0; i < listanumeros.length; i++){
    sum += listanumeros[i];
  }
  return sum;
}
console.log("La suma del array es:",sumararray(numeros));
//2
let numeros2 = [1, 2, 3, 4, 5, 6];
let prom = 0;
function promedioarray(listanumeros){
  for (let i = 0; i < listanumeros.length; i++){
    prom += listanumeros[i];
  }
  return prom/listanumeros.length;
}
console.log("El promedio del array es:",promedioarray(numeros2));
//3
let arregloStrings = ['Queso', 'Pan', 'Huevo', 'Sandia'];
function stringMayusculas(arreglopalabras){
  var palabrasenmayuscula = [];
  for (i = 0; i < arreglopalabras.length; i++){
    palabrasenmayuscula[i]=(arreglopalabras[i].toUpperCase());
  }
  return palabrasenmayuscula;
}
console.log(stringMayusculas(arregloStrings));
//4
let numeros3 = [1, 2, 3, 4, 5, 6];
function paresarray(listaNum){
var nuevoArray = [];
  for(let i = 0; i < listaNum.length; i++){
    if (listaNum[i] % 2 == 0){
       nuevoArray.push(listaNum[i])
    }
  }
  return nuevoArray;
}
console.log(paresarray(numeros3));