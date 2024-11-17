import { useContext, useEffect } from "react";
import { FakeAuthContext } from "./contexts/FakeAuthContextProvider";
import { useNavigate } from "react-router-dom";

function SecureRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(FakeAuthContext);

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );
  return <> {isAuthenticated ? children : null}</>;
}

export default SecureRoute;
