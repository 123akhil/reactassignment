import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import TodoHeader from "./TodoHeader";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAllTodos } from "../slices/todosSlice";

const Todos = ({ setUserDisplay }) => {
  //   const todos = useSelector(getAllTodos);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [todos, setTodos] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTodoList = todos.filter((todo) => {
        return Object.values(todo)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTodoList);
    } else {
      setSearchResults(todos);
    }
  };

  const getTodos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="bg-white shadow-md m-10 p-5 rounded-md flex flex-col">
      <TodoHeader
        todo={todos}
        term={searchTerm}
        searchKeyword={searchHandler}
      />
      <div>
        <table className="border-collapse border border-black p-12 shadow-lg m-6">
          <thead>
            <tr>
              <th className="tablebasic">ToDo ID</th>
              <th className="tablebasic">Title</th>
              <th className="tablebasic">Status</th>
              <th className="tablebasic">Action</th>
            </tr>
          </thead>
          <TableRow
            setUserDisplay={setUserDisplay}
            todos={searchTerm.length < 1 ? todos : searchResults}
          />
        </table>
      </div>
    </div>
  );
};

export default Todos;
