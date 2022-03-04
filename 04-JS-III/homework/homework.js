// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var firstItem = array[0];
  return firstItem;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var length_0 =array.length;
  return array[length_0-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  length_0 = array.length;
  return length_0;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for( var i = 0;i<array.length;i++){
      array[i]= 1+array[i];
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str1 ="";
  for (var i = 0; i<palabras.length-1;i++){
      var str2 = palabras[i]+" ";
      str1+=str2;
  }
  var str3= str1+palabras[palabras.length-1];
  return str3;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i<array.length;i++){
    var item =array[i];
    if (elemento === item ){
        return true;
    }
  }
  return false;

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum = 0;
  for (var i =0;i<numeros.length;i++){
    sum += numeros[i];
  }
  return sum;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = 0;
  for (var i =0;i<resultadosTest.length;i++){
    sum += resultadosTest[i];
  }
  return sum/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max= numeros[0];
    for(var i = 0;i<numeros.length;i++){
        if (numeros[i]>max){
            var max = numeros[i];
        } else{}
    }
    return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
if (arguments.length<1){
    return 0;
}else{};
var productoTotal = 1;
for(var i= 0; i<arguments.length;i++){
    productoTotal*=arguments[i];
}
return productoTotal;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var j=0;
  for ( var i = 0; i<arreglo.length;i++){
      if (arreglo[i]>18){
          j++;

      } else{}


  }
  return j;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var week_days =["domingo","lunes","martes","miércoles","jueves","viernes","sabado"];
    for (var i = 0; i<week_days.length;i++){
        if (week_days[numeroDeDia-1]==="domingo" || week_days[numeroDeDia-1] ==="sabado"){
            return "Es fin de semana";
        }
    }
    return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var str2= `${n}`;
  var length1=str2.length;
  for(var i=0;i<length1;i++){
      if(str2[i]==="9"){
          return true;
      }
  } 
  return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var item_0 = arreglo[0];
  var j=0;
  for (var i =0;i<arreglo.length;i++){
      if(arreglo[i] ===item_0){
          j++;
          if (j === arreglo.length-1){
              return true;
          }

      }

  }
  return false; 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array_0= [];
    for (var i = 0; i < array.length;i++){
        if ( array[i]=== "Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
            array_0.push(array[i]);//tener encuenta que hemos trabajado con el metodo
            //unshift para agregar un elemento al principio,debido a que 
            //la agregación por le método tradicional arrojaba una matriz con 5 elemntos.
        }
    }
    
    if (array_0.length===3){
        return array_0;
    } else {
         return "No se encontraron los meses pedidos"
    }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var new_array= []
    for (var i =0; i<array.length;i++){
        if (array[i]>100){
            new_array.push(array[i]);

        }
    }
    return new_array;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var val_0= numero;
  var new_numbers = [];
  for (var i =0;i<10;i++){
      val_0+=2;
      new_numbers.push(val_0);
      if (val_0=== i+1){
        return "Se interrumpió la ejecución";
        break;
      }


  }
  return new_numbers;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var val_0= numero;
  var new_numbers = [];
  for (var i =0;i<10;i++){
      if ( i+1 === 5){
          continue
      } else{
      val_0+=2;
      new_numbers.push(val_0);
  }
      


  }
  return new_numbers;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
