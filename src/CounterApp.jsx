import PropTypes from 'prop-types'
import { useState } from 'react'
//rafc


export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState( value )

  const increase = ()=> {
    setCounter( counter + 1 )
  }

  const decrease = ()=> {
    setCounter( counter - 1 )
  }

  const reset = ()=> {
    setCounter(value)
  }


  return (
    <>
        <h1>Hola, soy Goku</h1>
        <h2> { counter } </h2>
        <button onClick={ increase }> +1 </button>
        <button onClick={ decrease }> -1 </button>
        <button onClick={ reset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}