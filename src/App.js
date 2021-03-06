import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import UserDetails from "./components/UserDetails";

function App() {
  const [userDisplay, setUserDisplay] = useState(false); //display user detail or not
  return (
    <div className="flex flex-col md:items-center md:justify-evenly bg-gray-100 md:h-screen md:flex-row ">
      {/* Todos ->left side */}
      <Todos setUserDisplay={setUserDisplay} />
      {/* userdetail->right side */}
      {userDisplay ? <UserDetails /> : ""}
    </div>
  );
}

export default App;
