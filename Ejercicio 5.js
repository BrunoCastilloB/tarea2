//Ejercicio 5 Ciclos

//1
console.log("De 1 a 10")
for (let i = 0; i<10; i++){console.log(i+1)}
//2
console.log("De 10 a 1")
for (let i = 10; i>0; i--){console.log(i)}
//3
console.log("Pares")
for (let i = 0; i<=10; i++){
  if (i % 2 == 0){console.log(i)}
}
//4
console.log("Impares")
for (let i = 0; i<=10; i++){
  if (i % 2 !== 0){console.log(i)}
}
//5
console.log("Multiplos de 3")
for (let i = 0; i<=10; i++){
  if (i % 3 == 0){console.log(i)}
}
//6
console.log("Multiplos de 5")
for (let i = 0; i<=10; i++){
  if (i % 5 == 0){console.log(i)}
}
//7
console.log("Multiplos de 3 y 5")
for (let i = 0; i<=10; i++){
  if (i % 3 == 0 && i % 5 === 0){console.log(i)}
}
//8
console.log("Multiplos de 3 o 5")
for (let i = 0; i<=10; i++){
  if (i % 3 == 0 || i % 5 === 0 ){console.log(i)}
}