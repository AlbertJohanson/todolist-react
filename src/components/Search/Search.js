import React, { useContext, useState } from 'react'
import { todoContext } from '../../context/TodoContext'

export const Search = () => {

    const [value, setValue] = useState('')

    const {search} = useContext(todoContext)

    const handleSearch = (e) => {
        e.preventDefault();
        //filter data in state
        search(value)
    }

  return (
    <div>
        <div className='row g-3 mb-5'>
          <div className='col-4'>
            <input type="text" className='form-control' value={value} placeholder="Buscar..."  onChange={(e) => setValue(e.target.value)}></input>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary' onClick={handleSearch}>
                Buscar
            </button>
          </div>
        </div>
    </div>
  )
}
