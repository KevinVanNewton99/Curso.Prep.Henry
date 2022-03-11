// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  var arrayNombre = nombre.split("");
  var mayus =arrayNombre[0].toUpperCase();//pasa a mayuscula el primer caracter
  arrayNombre[0]= mayus;
  var arrayFinal = arrayNombre;
  //instanciamos una funcion
  function palabra(acc,elemento){
      return acc+elemento;
  }
  var stringFinal = arrayFinal.reduce(palabra)//en este caso no colocamos acumulador de arranque 
  //el acc = primer elemento del arrayFinal
  return stringFinal;

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  function sumar (acc,elemt){//tambien se pudo definir la función directamente 
    // en el metodo .reduce
    return acc+elemt;
  }
  var sumaTotal = numeros.reduce(sumar);// no agregamos acumulador de arranque
  return cb(sumaTotal);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  function elementoACallback(elemento){
    return cb(elemento);
  }
  var m = array.forEach(elementoACallback);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  function agregarACallback(elemento){
    return cb(elemento);
  }
  var arrayFinal =array.map(agregarACallback) ;
  return arrayFinal;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var arrayfinal= array.filter(letraA);
  function letraA(item){
      if (item.charAt(0)==="a"){
          return item;
      } else{}
  }
return arrayfinal;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
