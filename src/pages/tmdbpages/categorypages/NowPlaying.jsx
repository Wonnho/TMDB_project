import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function NowPlaying() {
  const [movies,setMovies]=useState([]);
  const {category,id}=useParams();

  return (
    <div>
     <ul>
    const movie=movies.map((movie)=>{ 
      <li key={movie.id}>
        <h3>{movies.title}</h3>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="now_playing" />
        </div>
      </li>
   
   })
      </ul>      
    </div>
  )
}
