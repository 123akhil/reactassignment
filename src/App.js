import "./App.css";
import Todos from "./components/Todos";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="flex flex-col md:items-center md:justify-evenly bg-gray-100 h-screen md:flex-row">
      {/* Todos ->left side */}
      <Todos />
      {/* userdetail->right side */}
      <UserDetails />
    </div>
  );
}

export default App;
