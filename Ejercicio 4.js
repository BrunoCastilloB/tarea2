//Ejercicio 4 Condicionales

const numero6 =10;
const numero7 =20;
const numero8 =30;

let numeroMayor = Math.max(numero6, numero7, numero8);
let numeroMenor = Math.min(numero6, numero7, numero8);
// 1
console.log(`El numero mayor es ${numeroMayor}`);
// 2
console.log(`El numero menor es ${numeroMenor}`);
// 3
if (numero6 % 2 == 0){
  console.log(`El numero ${numero6} es par`)
} else {console.log(`El numero ${numero6} es impar`)}
//4
if (numero7 % 2 == 0){
  console.log(`El numero ${numero7} es par`)
} else {console.log(`El numero ${numero7} es impar`)}
//5
if (numero8 % 2 == 0){
  console.log(`El numero ${numero8} es par`)
} else {console.log(`El numero ${numero8} es impar`)}
//6
if (numero6 % 5 == 0){
  console.log(`El numero ${numero6} es multiplo de 5`)
} else {console.log(`El numero ${numero6} no es multiplo de 5`)}
//7
if (numero7 % 5 == 0){
  console.log(`El numero ${numero7} es multiplo de 5`)
} else {console.log(`El numero ${numero7} no es multiplo de 5`)}
//8
if (numero8 % 5 == 0){
  console.log(`El numero ${numero8} es multiplo de 5`)
} else {console.log(`El numero ${numero8} no es multiplo de 5`)}