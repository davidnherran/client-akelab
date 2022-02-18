const CustomForm = ({ validate, onChange }) => {
  return (
    <form onSubmit={validate}>
      <div>
        <input
          type='text'
          name='fibonacci'
          onChange={(e) => { onChange(e.target.value) }}
          autoComplete='off'
          maxLength={5}
        />
      </div>
      <button type='submit'>&#10095;</button>
    </form>
  )
}

export default CustomForm
