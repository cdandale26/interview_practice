import React from "react";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

const RandomUser = () => {
  const [allUser, setAllUser] = useState([]);

  const fetchAllUser = async () => {
    let newUser = await fetchData();
    setAllUser([...allUser, newUser]);
  };

  const fetchData = async () => {
    return await axios
      .get("https://randomuser.me/api")
      .then((response) => {
        console.log(response.data.results);
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData().then((response) => {
      setAllUser([response]);
    });
  }, []);

  return (
    <div className="random_user_section">
      <h1>Getting Random Users</h1>
      <button className="userbutton" onClick={() => fetchAllUser()}>
        Next User
      </button>
      {allUser.map((person, idx) => (
        <div key={idx} className="information">
          <div className="profile_details">
            <h3>
              Name: {person[0].name.title} {person[0].name.first}{" "}
              {person[0].name.last}
            </h3>
            <h5>Email: {person[0].email}</h5>
            <h5>
              Address: {person[0].location.city}, {person[0].location.state},
              {person[0].location.country} : {person[0].location.postcode}
            </h5>

            <h5>Contact:</h5>
            <h6>Cell: {person[0].cell} </h6>
            <h6>Home: {person[0].phone} </h6>
          </div>

          <div className="profile_picture">
            <img src={person[0].picture.large} alt="profilepic" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomUser;
