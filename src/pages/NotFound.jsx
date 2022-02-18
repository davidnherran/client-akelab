import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='http__error'>
        <h1>404</h1>
        <p>La p&aacute;gina que buscas no fue encontrada</p>
      </div>
    </>
  )
}

export default NotFound
