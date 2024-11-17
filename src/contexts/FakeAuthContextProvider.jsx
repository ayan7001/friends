import { createContext, useReducer } from "react";

const demoUser = {
  email: "jobs@bynry.io",
  password: "iLoveAyan",
};
const initialState = {
  user: null,
  isAuthenticated: false,
};
const FakeAuthContext = createContext();
function reducer(userdata, actionObj) {
  switch (actionObj.type) {
    case "login":
      return { ...userdata, user: demoUser, isAuthenticated: true };

    default:
      break;
  }
}

function FakeAuthContextProvider({ children }) {
  const [userData, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = userData;
  function login(email, password) {
    if (email === demoUser.email && password === demoUser.password)
      dispatch({ type: "login" });
  }
  return (
    <FakeAuthContext.Provider value={{ user, isAuthenticated, login }}>
      {children}
    </FakeAuthContext.Provider>
  );
}

export { FakeAuthContext, FakeAuthContextProvider };
