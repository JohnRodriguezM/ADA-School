import { useEffect, useState } from "react";

// ? Cómo realizar peticiones en React con useEffect
export const FirstExample = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      // ? ⬅️ 1) llamada a la API, el resultado es una Promise
      .then((response) => response.json())
      // ? ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
      .then((dog) => {
        console.log(dog);
        setImage(dog.message);
      })
      // ? ⬅️ 3) aquí ya tenemos la respuesta en formato objeto
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      <img style={{ width: "300px", height: "300px" }} src={image} alt="" />
    </section>
  );
};
