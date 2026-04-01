import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(
      'https://my-first-web-app-aphyhjdfdxc3fxg6.centralindia-01.azurewebsites.net/',
    )
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Azure 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
