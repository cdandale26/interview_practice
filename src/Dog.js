import axios from "axios";
import React, { useEffect, useState } from "react";

const Dog = () => {
  const [dog, setDog] = useState({});
  const [dogInfo, setDogInfo] = useState([]);

  const fetchData = async () => {
    return await axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setDog(response.data);
        setDogInfo([...dog, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button>Click me for next Dog</button>
      <img src={dog.message} alt="cute_puppy" />
      {dogInfo.length}
    </div>
  );
};

export default Dog;
