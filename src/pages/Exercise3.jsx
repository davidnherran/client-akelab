import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { gql, useQuery } from '@apollo/client'

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
  const { data } = useQuery(ALL_MOVIES)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (data) {
      setMovies(data.allMovies[0].results)
    }
  }, [data])

  return (
    <div>
      <Navbar />
      {console.log(movies)}
    </div>
  )
}

export default Exercise3
