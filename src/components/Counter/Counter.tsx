import React, { useState } from 'react'

type Props = {}

const Counter = (props: Props) => {

  const [counter, setCounter] = useState<number>(0)

  const addValue = () => {
    setCounter(prevState => prevState + 1)
    setCounter(prevState => prevState + 1)
  }

  return (
    <>
      <button onClick={ addValue }>+</button>
    </>
  )
}

export default Counter