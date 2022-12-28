import React, {useEffect,useState} from 'react'
import './Banner.css'
import axios from '../../Constants/axios'
import {API_KEY,Image_Url} from '../../Constants/constants'

function Banner() {

    const [movie,setMovie] = useState([])

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
                    
                       setMovie(response.data.results[
                         Math.floor(Math.random() * response.data.results.length-1)
                       ]);
         })     
    },[])
    
  return (

    <div style={{backgroundImage:`url(${movie ? Image_Url+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie   ? movie.title || movie.name : ""}</h1>
            <div className='banner__buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>

            <h1 className='banner__description'>{movie ? movie.overview : ""}</h1>

        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner