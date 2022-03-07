import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const[post, setPost] = useState([]);
const [search, setSearch] = useState('Edmonton');
const [degree, setDegree] = useState('');
 

  useEffect(()=> {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d76a48cdf91492d18429929e8379094e`)
    .then(res => {
      console.log(res.data.weather);
      console.log(res.data.main);
      setPost(res.data.weather);
    setDegree(res.data.main);
    }).catch(err => console.log(err));
  },[search]);

 const weatherForCast = post.map((item) => {
  return (
   <div className="container">
   <div className="col-md-12 text-center">
   <h2>{item.main}</h2>
   <h3>{item.description}</h3>
   </div>
   </div>
   )
 })

 const handleChange = (e) => {
   setSearch(e.target.value);
   e.preventDefault();
 }



  return (
   
    <div>
   



<div className="row">


  <div className="col-md-12 text-center container">
  <h1>Weather in {search.toUpperCase()} </h1>
    <input type="text" placeholder="type the city name" onChange={handleChange}/>
 <div className="col-md-12 text-center container-item">
 {weatherForCast}

<h3 style={{color: 'darkblue'}}>Temperature in {search}: {Math.floor(degree.temp-273)} degree Celsius</h3>
</div>
</div>
</div>
</div>

  );
}

export default App;
