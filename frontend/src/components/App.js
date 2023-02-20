import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/users");
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}!
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
const container = document.getElementById("app");
render(<App />, container);
