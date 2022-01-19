import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";

const TodoHeader = (props) => {
    const input = useRef("");
    const getSearchTerm = () => {
        props.searchKeyword(input.current.value);
      };
    return (
        <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-lg font-bold ml-6">Todos</h1>
        <div className="relative ml-6 mr-4 rounded-full flex">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500 " />
          </div>
          <input
            className="bg-white py-1 px-2  pl-10 sm-text-sm ring-1 ring-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black hover:ring-1 hover:ring-gray-400 "
            type="text"
            placeholder="Search"
            value={props.term}
            onChange={getSearchTerm}
            ref={input}
          />
        </div>
      </div>
    )
}

export default TodoHeader
