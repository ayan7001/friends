import { useContext, useEffect, useMemo, useState } from "react";
import { FakeAuthContext } from "./contexts/FakeAuthContextProvider";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
// import Message from "./assets/Message";

function Login() {
  const [email, setEmail] = useState("jobs@bynry.io");
  const [password, setPassword] = useState("iLoveAyan");
  const [message, setMessage] = useState("");
  const { login, user, isAuthenticated } = useContext(FakeAuthContext);
  const navigate = useNavigate();
  // console.log(user);
  function handleShowMessage() {
    if (!isAuthenticated) setMessage("Wrong email and password!");
  }
  const handleNavigation = useMemo(
    () =>
      function () {
        if (isAuthenticated) navigate("/app", { replace: true });
      },
    [isAuthenticated, navigate]
  );
  useEffect(
    function () {
      handleNavigation();
      () => handleNavigation();
    },
    [isAuthenticated, navigate, handleNavigation]
  );

  return (
    <>
      <p>{message}</p>
      <div className={styles.main}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password);
            // isAuthenticated ? null : setMessage("wrong email and password!");
            handleShowMessage();
          }}
        >
          <label htmlFor="email">Enter Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Enter Password</label>
          <input
            htmlFor="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              login(email, password);
              handleShowMessage();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
