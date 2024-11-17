import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
function Homepage() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <h1>Find out your friends list</h1>
      <button onClick={() => navigate("login")}>Check</button>
    </div>
  );
}

export default Homepage;
