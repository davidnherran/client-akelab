import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { gql, useQuery } from '@apollo/client'
import starFull from '../assets/images/Star3.png'
import starEmpty from '../assets/images/Star5.png'
import search from '../assets/images/Search.png'
import filter from '../assets/images/FilterIcon.png'
import sort from '../assets/images/ArrowIcon.png'

const ALL_MOVIES = gql`
query {
  allMovies {
    genres {
      id
      name
    }
    images_url
    results {
      genre_ids
      vote_count
      title
      vote_average
      overview
      release_date
      popularity
      video
      poster_path
    }
  }
}
`

const Exercise3 = () => {
  const { data, error, loading } = useQuery(ALL_MOVIES)
  const [imguri, setImgUri] = useState('')
  const [genrer, setGenrer] = useState('')
  const [movies, setMovies] = useState([])
  const [listMovies, setListMovies] = useState([])

  useEffect(() => {
    if (data) {
      setImgUri(data.allMovies[0].images_url)
      setMovies(data.allMovies[0].results)
      setGenrer(data.allMovies[0].genres)
      setListMovies(data.allMovies[0].results)
    }
  }, [data])

  if (error) {
    return (
      <>
        <Navbar />
        <div className='http__error'>
          <h1>503</h1>
          <p>El servidor ha rechazado la conexi&oacute;n</p>
        </div>
      </>
    )
  }

  const getGenre = (genres, genreIds) => {
    const genre = genres.filter(genre => genreIds.includes(genre.id))
    return genre.map(genre => genre.name).join(', ')
  }

  const getStars = (voteAverage) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < voteAverage / 2) {
        stars.push(<img key={i} src={starFull} alt='star' />)
      } else {
        stars.push(<img key={i} src={starEmpty} alt='star' />)
      }
    }
    return stars
  }

  const handleSearch = (e) => {
    filterMovies(e.target.value)
  }

  const filterMovies = (search) => {
    const result = movies.filter((elemento) => {
      if (elemento.title.toString().toLowerCase().includes(search.toLowerCase())) {
        return elemento
      }
    })
    setListMovies(result)
  }

  /* FIltrar movies por genrer */
  const filterMoviesByGenrer = (genrerId) => {
    const result = movies.filter((element) => {
      if (element.genre_ids.includes(genrerId)) {
        return element
      }
    })
    setListMovies(result)
  }

  return (
    <div className='movies'>
      <Navbar />
      <div className='container'>
        <h1>Películas</h1>
        <input className='movies__search' type='text' onChange={handleSearch} />
        <img className='movies__search-icon' src={search} />
        <div className='movies__filter'>
          <img className='movies__filter-icon' src={filter} alt='' />
        </div>
        <div className='movies__sort' onClick={() => { filterMoviesByGenrer(18, 12) }}>
          Ordenar <img className='movies__sort-icon' src={sort} />
        </div>
        <div className='movies__scrollable'>
          <div className='grid'>
            {loading
              ? <p>Loading...</p>
              : listMovies.length > 0
                ? listMovies.map((movie, i) => (
                  <div className='card' key={i}>
                    <h2>{`${movie.title} (${movie.release_date.split('-')[0]})`}</h2>
                    <div className='card__body'>
                      <div className='card__body-img'>
                        <img width={180} height={270} src={`${imguri}${movie.poster_path}`} alt='' />
                      </div>
                      <div className='card__body-overview'>
                        <p>{`${movie.overview.substr(0, 365)}...`}</p>
                        <div className='card__body-description'>
                          <div><span>Titulo: </span> {movie.title}</div>
                          <div><span>Calificacion: </span> {movie.vote_average}
                            {' '}{getStars(Math.floor(movie.vote_average))}
                          </div>
                          <div><span>Genero: </span> {getGenre(genrer, movies[i].genre_ids)}</div>
                          <div><span>Fecha de realización: </span> {movie.release_date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                : <p>Ning&uacute;n resultado coincide con tu b&uacute;squeda</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercise3
