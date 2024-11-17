import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Error from "./Error";
import Login from "./Login";
import { FakeAuthContextProvider } from "./contexts/FakeAuthContextProvider";
import Applayout from "./Applayout";
import SecureRoute from "./SecureRoute";
import FriendDetails from "./FriendDetails";
import { Navigate } from "react-router-dom";
import Friends from "./Friends";

function App() {
  return (
    <BrowserRouter>
      <FakeAuthContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/app"
            element={
              <SecureRoute>
                <Applayout />
              </SecureRoute>
            }
          >
            <Route index element={<Navigate replace to="friends" />} />
            <Route path="friends" element={<Friends />} />
            <Route path="friends/:id" element={<FriendDetails />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </FakeAuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
