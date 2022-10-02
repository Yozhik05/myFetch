import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .catch((e) => console.error(e))
      .then((json) => setUsers(json));
  }, []);
  console.log(users);
  return (
    <div className="App">
      {users.length ? (
        <ol>
          {users.length &&
            users.map((user, index) => {
              return <li>{user.name}</li>;
            })}
        </ol>
      ) : (
        <>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </>
      )}
    </div>
  );
}
