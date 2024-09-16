//Ejercicio 6 Funciones

//1
function mayusculas(palabra){
    return palabra.toUpperCase()
    }
    console.log(mayusculas("Queso"))
    //2
    function minusculas(palabra){
    return palabra.toLowerCase()
    }
    console.log(minusculas("Queso"));
    //3
    function restar(a, b){
      return a - b;
    }
    console.log("La resta es:",restar(9, 6));
    //4
    function dividir(a, b){
      return a / b;
    }
    console.log("La division es:",dividir(5, 2));
    //5
    function multi(a, b){
      return a * b;
    }
    console.log("La multiplicacion es:",multi(8, 4));
    //6
    function longitud(palabra){
      return palabra.length;
    }
    console.log("La longitud es:",longitud("La longitud de la palabra es"));