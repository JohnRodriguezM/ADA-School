import { useEffect, useState } from "react";

export const ThirdExample = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((dog) => {
        console.log(dog);
        setImage(dog.message);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
        setImage("");
      })
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
