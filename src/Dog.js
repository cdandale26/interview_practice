import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Dog = () => {
  const [allDog, setAllDog] = useState([]);

  const fetchAllDog = async () => {
    let newDog = await fetchData();
    setAllDog([...allDog, newDog]);
  };

  console.log(`I am newDog ${allDog}`);

  const fetchData = async () => {
    return await axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData().then((response) => {
      setAllDog([response]);
    });
  }, []);

  return (
    <div>
      <button onClick={() => fetchAllDog()}>Click for nextDog</button>
      {allDog.map((dogs, idx) => (
        <img key={idx} src={dogs.message} alt="cute_pup" />
      ))}
    </div>
  );
};

export default Dog;
