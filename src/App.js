import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Mynotes from "./components/Mynotes";


function App() {
  return (
    <div >
      {" "}
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mynotes" element={<Mynotes />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
