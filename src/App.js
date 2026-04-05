import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    if (!apiUrl) {
      console.error("REACT_APP_API_URL is not defined");
      return;
    }

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setMessage(data.message || JSON.stringify(data));
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setMessage(`Fetch failed: ${err.message}`);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Azure 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
