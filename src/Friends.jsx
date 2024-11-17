import { useEffect, useState } from "react";
import styles from "./Friends.module.css";
import { useNavigate, useParams } from "react-router-dom";
function Friends() {
  const [allFriends, setAllFriends] = useState([]);
  const [error, setError] = useState(null);
  const [deletedFriend, setDeletedFriend] = useState(0);

  //Do npm install json-server
  //Run the server npm run server in order to be able to fetch data from the fake json server.
  useEffect(
    function () {
      async function getData() {
        setError(null);
        try {
          const data = await fetch("http://localhost:9000/friends");
          const dataJSON = await data.json();
          setAllFriends(dataJSON);
        } catch (err) {
          setError(err.message);
          //   console.log(error);
        }
      }
      getData();
    },
    [deletedFriend]
  );
  // console.log(allFriends.length);

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
      <p>{error}</p>
      {!error &&
        allFriends.map((friend, index) => (
          <Friend
            info={friend}
            key={index}
            setDeletedFriend={setDeletedFriend}
          />
        ))}
    </div>
  );
}

function Friend({ info, setDeletedFriend }) {
  // console.log(info);
  const navigate = useNavigate();
  const [selectedID, setSelectedID] = useState(null);
  //
  const {
    id,
    position: { lat, lng },
  } = info;
  useEffect(
    function () {
      async function deleteFriend() {
        try {
          await fetch(`http://localhost:9000/friends/${selectedID}`, {
            method: "DELETE",
          });
        } catch (err) {
          setError(err.message);
        }
      }
      deleteFriend();
      () => deleteFriend();
      setDeletedFriend((number) => number + 1);
    },
    [setSelectedID, selectedID, setDeletedFriend]
  );
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        width: "300px",
        height: "40px",
        justifyContent: "space-between",
        alignItems: "end",
        border: "1px solid grey",
      }}
    >
      <p>{info.friendName}</p>
      <button
        style={{ width: "100px", height: "38px", border: "none" }}
        onClick={() => navigate(`${id}?lat=${lat}&lng=${lng}`)}
      >
        Summary
      </button>
      <button
        className={styles.deleteBtn}
        onClick={(e) => {
          e.preventDefault();
          setSelectedID(id);
        }}
      >
        &times;
      </button>
    </div>
  );
}

export default Friends;
