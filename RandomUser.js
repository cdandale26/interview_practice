//https://randomuser.me/api

import axios from "axios";
import React, { useState, useEffect } from "react";

const fetchRandomData = (pageNumber) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const RandomUser = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const getFullUserName = (name) => {
    const {
      name: { title, first, last },
      gender,
    } = name;
    return `Name: ${title} ${last}, ${first} Gender: ${gender}`;
  };

  const fetchNextUser = () => {
    fetchRandomData(nextPage).then((randomData) => {
      const newUserData = [...userInfo, ...randomData.results];
      setUserInfo(newUserData);
      setNextPage(randomData.info.page + 1);
    });
  };

  useEffect(() => {
    fetchNextUser();
  }, []);

  return (
    <div>
      <h2>Geting RandomUsers</h2>
      <h5>Names of the Users:</h5>
      <button onClick={() => fetchNextUser()}>Fetch Next User</button>
      {userInfo.map((person, idx) => (
        <div key="idx">
          <p>{getFullUserName(person)}</p>
          <img src={person.picture.large} />
        </div>
      ))}
    </div>
  );
};

export default RandomUser;
