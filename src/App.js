import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Azure 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
