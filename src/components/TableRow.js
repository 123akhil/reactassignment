const TableRow = ({ setUserDisplay, todos }) => {
  const viewUser = () => {
    setUserDisplay(true);
  };
  return (
    <tbody>
      {todos.length > 0
        ? todos.slice(0, 3).map((todo) => {
            return (
              <tr>
                <td className="tablebasic">{todo.id}</td>
                <td className="tablebasic">{todo.title}</td>
                <td className="tablebasic">{todo.completed ? "Yes" : "No"}</td>
                <td className="tablebasic">
                  <button
                    onClick={viewUser}
                    className="border-black text-lg border-2 px-2 py-1 font-semibold hover:bg-gray-200"
                  >
                    View User
                  </button>
                </td>
              </tr>
            );
          })
        : "No Todos available"}
    </tbody>
  );
};

export default TableRow;
