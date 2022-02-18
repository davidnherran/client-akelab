import { useState } from 'react'
import CustomForm from '../components/CustomForm'

const Exercise1 = () => {
  const [lengthSerie, setLengthSerie] = useState('')
  const [error, setError] = useState('')
  const [fibonacciSerie, setFibonacciSerie] = useState([])

  /* Función para generar la sucesión de Fibonacci */
  const generateFibonacciSeries = () => {
    const serie = [1, 1]

    for (let i = 2; i < lengthSerie; i++) {
      serie[i] = serie[i - 1] + serie[i - 2]
    }

    return serie
  }

  const fibonacci = generateFibonacciSeries()

  /* Validación de campos, si es válido se asigna al estado, si no es válido se genera un mensaje de error */
  const validate = (e) => {
    e.preventDefault()
    if (lengthSerie === '') return setError('Debes ingresar al menos un número')
    if (isNaN(lengthSerie)) return setError('Este campo no acepta texto, ingresa un número')
    if (lengthSerie <= 0) return setError('Debes ingresar un número mayor a cero')
    if (lengthSerie > 1000) return setError('Debes ingresar un número menor a 1000')
    if (lengthSerie % 1 !== 0) return setError('Debes ingresar un número entero')
    setFibonacciSerie(fibonacci)
    setError('')
  }

  return (
    <>
      <div className='exercise'>
        <div className='exercise__container'>
          <div className='exercise__container-title'>
            <h1>Sucesi&oacute;n de Fibonacci</h1>
            <p>
              Ingresa un n&uacute;mero indicando la longitud de campos que deseas obtener en la
              serie de Fibonacci, debes ingresar un n&uacute;mero mayor a cero y
              menor a 1000, este &uacute;ltimo con el fin de evitar un
              desbordamiento de búfer.
            </p>
          </div>
          <CustomForm validate={validate} onChange={setLengthSerie} />
          {error
            ? <p className='exercise__error'>{error}</p>
            : (
              <div className='exercise__output'>
                {fibonacciSerie.map((number, index) => (
                  <div key={index} className='exercise__output-square'>
                    {number}
                  </div>
                ))}
              </div>
              )}
        </div>
      </div>
    </>
  )
}

export default Exercise1
