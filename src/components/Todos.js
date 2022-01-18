import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { getAllTodos } from "../slices/todosSlice";

const Todos = () => {
  const todos = useSelector(getAllTodos);
  console.log(todos);
  return (
    <div className="bg-white shadow-md m-10 p-5 rounded-md ">
      <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-lg font-bold">Todos</h1>
        <div className="relative ml-5 mr-4 rounded-full flex">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500 " />
          </div>
          <input
            className="bg-white py-1 px-2  pl-10 sm-text-sm ring-1 ring-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black hover:ring-1 hover:ring-gray-400 "
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div>
        <table className="border-collapse border border-black p-10 shadow-lg">
          <thead>
            <tr>
              <th className="tablebasic">ToDo ID</th>
              <th className="tablebasic">Title</th>
              <th className="tablebasic">Status</th>
              <th className="tablebasic">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tablebasic">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="tablebasic">Malcolm Lockyer</td>
              <td className="tablebasic">1961</td>
              <td className="tablebasic">1961</td>
            </tr>
            <tr>
              <td className="tablebasic">Witchy Woman</td>
              <td className="tablebasic"> The Eagles</td>
              <td className="tablebasic">1972</td>
              <td className="tablebasic">1972</td>
            </tr>
            <tr>
              <td className="tablebasic">Shining Star</td>
              <td className="tablebasic">Earth, Wind, and Fire</td>
              <td className="tablebasic">1975</td>
              <td className="tablebasic">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
