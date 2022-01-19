import UserButton from "./UserButton";

const TableRow = ({ setUserDisplay, todos }) => {
  return (
    <tbody>
      {/* slicing top 3  todos and mapping */}
      {todos.length > 0
        ? todos.slice(0, 3).map(({ id, title, completed, userId }) => {
            return (
              <tr>
                <td className="tablebasic">{id}</td>
                <td className="tablebasic">{title}</td>
                <td className="tablebasic">{completed ? "Yes" : "No"}</td>
                <td className="tablebasic">
                  <UserButton
                    key={userId}
                    id={id}
                    title={title}
                    userId={userId}
                    setUserDisplay={setUserDisplay}
                  />
                </td>
              </tr>
            );
          })
        : "No Todos available"}
    </tbody>
  );
};

export default TableRow;
