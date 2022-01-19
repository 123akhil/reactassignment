import { useDispatch } from "react-redux";
import { viewTodoid, viewTodotitle, viewUser } from "../slices/todosSlice";

const UserButton = ({ setUserDisplay, userId, id, title }) => {
  const dispatch = useDispatch(); //shoot action into the global store
  const selectUser = () => {
    setUserDisplay(true);
    if (userId) {
      dispatch(
        viewUser({
          userId: userId,
        })
      );
      dispatch(
        viewTodoid({
          todoId: id,
        })
      );
      dispatch(
        viewTodotitle({
          todoTitle: title,
        })
      );
    }
  };

  return (
    <div>
      <button
        onClick={selectUser}
        className="border-black text-lg border-2 px-2 py-1 font-semibold hover:bg-gray-200"
      >
        View User{userId}
      </button>
    </div>
  );
};

export default UserButton;
