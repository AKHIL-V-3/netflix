
import axios from '../../Constants/axios'
import React, { useState, useEffect } from 'react'
import './Rowpost.css'
import { API_KEY, Image_Url } from '../../Constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) => {

      setMovies(response.data.results)
    })
  })


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);

    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>

      <h2>{props.title}</h2>
      <div className='posters'>

        {movies.map((movies) =>

          <img onClick={() => handleMovie(movies.id)} className={props.isSmall ? 'smallPoster' : 'poster__image'} src={`${Image_Url + movies.backdrop_path}`} alt="" />

        )}

      </div>

      {urlId ? <Youtube opts={opts} videoId={urlId.key} /> : null}
    </div>
  )
}

export default RowPost