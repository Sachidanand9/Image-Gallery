import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Article from "./Article"

export default function SearchBar() {
    const [image, setImage] = useState("");
    const clientId = "Nl5hTwzNIODKmEXuWjQnkIELBFakeC_WVoXyU3poyc0";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        event.preventDefault();
     setImage(event.target.value);
    };
    const handleSubmit = () => {
        console.log(image);
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
        axios.get(url).then((response) => {
        console.log(response);
        setResult(response.data.results);
        });
        }
    
    return(
   <div className="app">
   <h1>Search What Would You Like</h1>
    <div className="input">
      <input onChange={handleChange} type="text" name="image"    placeholder="Search for images"/>
    </div>
  <button onClick={handleSubmit} type="search">Search</button>
   <div className="result">
  <>
   <div className="container mx-auto px-5 2xl:px-0">
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {result.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
      </div>
  </>
</div>
</div>
)}
    
