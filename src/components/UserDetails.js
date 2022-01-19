import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectTodoId,
  selectTodoTitle,
  selectUserId,
} from "../slices/todosSlice";
const UserDetails = () => {
  const [user, setUser] = useState([]);
  const userId = useSelector(selectUserId); //to grab(pull) the userId from global store
  const todoId = useSelector(selectTodoId);
  const todoTitle = useSelector(selectTodoTitle);

  const getUser = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    setUser(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getUser();
  }, [userId]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">User Detail</h1>
      <div className="w-96 border-black bg-white m-10 h-64 border-2 rounded-lg">
        <div className="m-4 text-lg font-bold">
          TodoId: <span className="ml-6 text-sm font-medium">{todoId}</span>
        </div>
        <div className="m-4 text-lg font-bold">
          Todo Title:{" "}
          <span className="ml-6 text-sm font-medium">{todoTitle}</span>
        </div>
        <div className="m-4 text-lg font-bold">
          User ID: <span className="ml-6 text-sm font-medium">{userId}</span>
        </div>
        <div className="m-4 text-lg font-bold">
          Name: <span className="ml-6 text-sm font-medium">{user.name}</span>
        </div>
        <div className="m-4 text-lg font-bold">
          Email: <span className="ml-6 text-sm font-medium">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
