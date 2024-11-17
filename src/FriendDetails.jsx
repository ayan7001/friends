import { useParams } from "react-router-dom";
import styles from "./FriendDetails.module.css";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000/friends";
function FriendDetails() {
  const params = useParams();
  const { id } = params;
  const [friendDetails, setFriendDetails] = useState({});
  const { friendName, cityName, email, emoji } = friendDetails;
  //   console.log(id);
  useEffect(
    function () {
      async function getFriendDetails() {
        const data = await fetch(`${BASE_URL}/${id}`);
        const dataJSON = await data.json();
        setFriendDetails(dataJSON);
      }
      getFriendDetails();
      () => getFriendDetails();
    },
    [id]
  );
  return (
    <div
      style={{
        width: "400px",
        height: "auto",
        padding: "4px 4px 4px 4px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "1.3rem" }}>{friendName}</h1>
      <h2 style={{ fontSize: "1.2rem" }}>City: {cityName} </h2>
      <h3 style={{ fontSize: "1.2rem" }}>Email: {email}</h3>
    </div>
  );
}

export default FriendDetails;
