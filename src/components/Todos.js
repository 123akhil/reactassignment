import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import TodoHeader from "./TodoHeader";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";

const Todos = ({ setUserDisplay }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [todos, setTodos] = useState([]);
  const [arrow, setArrow] = useState(true);
  //Ascending Order
  const makeAsc = () => {
    setArrow(true);
    todos.sort((a, b) => {
      return a.id - b.id;
    });
  };
  //Descending Order
  const makeDesc = () => {
    setArrow(false);
    todos.sort((a, b) => {
      return b.id - a.id;
    });
  };
  //creating search handling
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
  //get request todos
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
              <th className="flex items-center p-3 border-black border-b-2">
                <p className="mr-2">ToDo ID</p>
                {arrow ? (
                  <ArrowUpIcon
                    onClick={makeDesc}
                    className="h-5 cursor-pointer"
                  />
                ) : (
                  <ArrowDownIcon
                    onClick={makeAsc}
                    className="h-5 cursor-pointer"
                  />
                )}
              </th>
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
