import React from 'react'
// import { useActive } from './TaskForm'

type Props = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonAdd = ({setActive}:Props) => {


  return (
    <span onClick={() => setActive(true)}  className='button-add' >
        Create new Task
    </span>
  )
}

export default ButtonAdd