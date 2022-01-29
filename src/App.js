import React, { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/visits').then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div className="App">
      {data.map((el) => {
        <p>{el.employeeName}</p>
      })}
    </div>
  );
}

export default App;
