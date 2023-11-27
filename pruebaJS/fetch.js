// ? Fetch es una función que nos permite hacer peticiones a una API

/*fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((dog) => {
    console.log(dog);
  });*/


/*
La función response.json() se utiliza para leer y devolver una Promise que resuelve con el cuerpo de la respuesta parseado como JSON.

Cuando haces una petición fetch, la respuesta es un objeto Response que contiene no solo el cuerpo de la respuesta, sino también otros detalles como el estado de la respuesta y los encabezados. Métodos como json() se usar para leer los datos y convertirlos en un formato útil.
*/

// ? using promises
/*const getDataFromAPI = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((dog) => {
      console.log(dog);
    });
};

getDataFromAPI();
*/

// ? using async await
/*const getDataFromAPI = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();
  console.log(dog);
};

getDataFromAPI();
*/
