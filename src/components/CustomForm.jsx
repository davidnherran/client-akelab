const CustomForm = ({ validate, onChange }) => {
  return (
    <form onSubmit={validate}>
      <div className='input__container'>
        <input
          type='text'
          name='fibonacci'
          onChange={(e) => { onChange(e.target.value) }}
          autoComplete='off'
          maxLength={5}
        />
        <label htmlFor='fibonacci' className='input__label-name'>
          <span className='input__content-name'>
            Ingresa un numero mayor a cero
          </span>
        </label>
      </div>
      <button type='submit'>&#10095;</button>
    </form>
  )
}

export default CustomForm
