import React from 'react'

const InputFiled = () => {

  
  return <input className='bg-gray-900 border rouned-md min-w-100 text-white' type="text" onChange={(event) => console.log(event.target.value)}/>
}

export default InputFiled
