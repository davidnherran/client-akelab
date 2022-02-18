import { useState } from 'react'
import Navbar from '../components/Navbar'
import CustomForm from '../components/CustomForm'

const Exercise2 = () => {
  const [lengthSerie, setLengthSerie] = useState('')
  const [error, setError] = useState('')
  const [numberSerie, setNumberSerie] = useState([])

  const generateSequence = () => {
    const sequence = []

    for (let i = 1; i < Number(lengthSerie) + 1; i++) {
      if (i % 3 === 0 && i % 5 !== 0) sequence.push('AKE')
      if (i % 3 !== 0 && i % 5 === 0) sequence.push('LAB')
      if (i % 3 === 0 && i % 5 === 0) sequence.push('AKELAB')
      if (i % 3 !== 0 && i % 5 !== 0) sequence.push(i)
    }

    return sequence
  }

  const serie = generateSequence()

  const validate = (e) => {
    e.preventDefault()
    if (lengthSerie === '') return setError('Debes ingresar al menos un número')
    if (isNaN(lengthSerie)) return setError('Este campo no acepta texto, ingresa un número')
    if (lengthSerie <= 0) return setError('Debes ingresar un número mayor a cero')
    if (lengthSerie > 1000) return setError('Debes ingresar un número menor a 1000')
    if (lengthSerie % 1 !== 0) return setError('Debes ingresar un número entero')
    setNumberSerie(serie)
    setError('')
  }

  return (
    <>
      <Navbar />
      <div className='exercise'>
        <div className='exercise__container'>
          <div className='exercise__container-title'>
            <h1>Serie de Akelab</h1>
            <p>
              Ingresa un n&uacute;mero indicando la longitud de campos que deseas obtener en la
              serie de Akelab, debes ingresar un n&uacute;mero mayor a cero y
              menor a 1000, este &uacute;ltimo con el fin de evitar un
              desbordamiento de búfer.
            </p>
          </div>
          <CustomForm validate={validate} onChange={setLengthSerie} />
          {error
            ? <p className='exercise__error'>{error}</p>
            : (
              <div className='exercise__output'>
                {numberSerie.map((number, index) => (
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

export default Exercise2
