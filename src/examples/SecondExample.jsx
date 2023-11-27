import { useEffect, useState } from "react";

// ? usar un loader para que la carga de la imagen y de la información que viene de la API se realice de mejor manera
export const SecondExample = () => {
  const [loading, setLoading] = useState(true);
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
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section>
        <p> Loading... </p>
      </section>
    );
  }

  return (
    <section>
      <img
       style={{ width: "300px", height: "300px" }}
       src={image} alt="dog Image" />
    </section>
  );
};
