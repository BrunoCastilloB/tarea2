//Ejercicio 3 Operadores de asignacion y comparacion

const numero3 = 15;
const numero4 = 20;
const numero5 = '25';
//1
if(numero3 >= numero4) {
  console.log(`El numero ${numero3} es mayor o igual que ${numero4}`)
} else {console.log(`El numero ${numero3} no es mayor o igual que ${numero4}`)}
//2
if(numero3 <= numero4) {
  console.log(`El numero ${numero3} es menor o igual que ${numero4}`)
} else {console.log(`El numero ${numero3} no es menor o igual que ${numero4}`)}
//3
if(numero3 < numero5){
  console.log(`El numero ${numero3} es menor que ${numero5}`)}
else {console.log(`El numero ${numero3} no es menor que ${numero5}`)}
//4
if(numero5 < numero4){
  console.log(`El numero ${numero5} es menor que ${numero4}`)
} else {console.log(`El numero ${numero5} no es menor que ${numero4}`)}
//5
if (numero5 !== numero3){
  console.log(`El numero ${numero5} es estrictamente diferente que ${numero3}`)
}
//6
if (numero3 === numero4){
  console.log(`El numero ${numero3} es estrictamente igual que ${numero4}`)
}