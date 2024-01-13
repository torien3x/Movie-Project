import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Movies';
import SideNav from './Component/SideNav';

const headers = {
    'X-RapidAPI-Key': 'fd7c953c4amshfa5b3215ca99ba0p1a522djsn7bafc29ea657',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  
};

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios
        .get('https://moviesdatabase.p.rapidapi.com/titles', {
          headers:headers
        })
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
          console.error('server error', error);
        })
  }, [])
  console.log(data)
  return (
    <div className="App">
      <SideNav />
      
    </div>
  );
}

export default App;
