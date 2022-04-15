import React, { useEffect, useState } from 'react';
import axios from 'axios';
   
const Welcome = ({ user }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    msgJson();
  }, []);

   const msgJson = async() => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <h1>Welcome {user}</h1> 
      <p>{data.body}</p>  
    </div>

  )
}

export default Welcome;



