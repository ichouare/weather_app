import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import './App.css'
const Loader = () => {
  return (
    <div className='loader' >
    <TailSpin
    height="100"
    width="800"
    color="#5C62C1"
    ariaLabel="tail-spin-loading"
    radius="2"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
    </div>
  )
}

export default Loader