import { useState, useEffect } from "react";

export const FourthExample = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState({
    image: "",
    breed: "",
    message: "",
  });

  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dog = await response.json();
      /*
      dog.message.split("/"): This is using the split method of a string to divide the string into an array of substrings. It's splitting the string wherever it sees a "/" character. For example, if dog.message is the string "https://dog.ceo/api/breeds/hound/images/random", after splitting, you would get an array like ["https:", "", "dog.ceo", "api", "breeds", "hound", "images", "random"]. The breed name is the 5th element of the array, so you can access it with dog.message.split("/")[4].
      */
      setImage({
        image: dog.message,
        breed: dog.message.split("/")[4],
        message: "Dog image loaded successfully",
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
      setImage({
        image: "",
        breed: "",
        message:
          "There was a problem with the fetch operation, please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      fetchDogImage();
    }
  }, [loading]);

  const handleClick = () => setLoading(true);

  if (loading) {
    return (
      <section>
        <p> Loading Image... </p>
      </section>
    );
  }

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem",
      }}
    >
      <h2>{`Image of ${image?.breed} breed`}</h2>
      <img
        style={{ width: "300px", height: "300px" }}
        src={image?.image}
        alt={image?.message}
      />
      <button onClick={handleClick}>Load new image</button>
    </section>
  );
};
