import { React, useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { FaSearch } from 'react-icons/fa'

const FormSearch = () => {
  const [title, setTitle] = useState('')
  const { setQuery } = useContext(DataContext)
  // const { setQuery, error} = useContext(DataContext)
  // const { data } = useFetch('superman')

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(title)
    // console.log('titulo', title)
  }
  return (
    <form className='d-flex' onSubmit={handleSubmit}>
      <input className='form-control me-sm-2' type='text' placeholder='Search' onChange={e => setTitle(e.target.value)} />
      <input className='btn btn-secondary my-2 my-sm-0' type='submit'><FaSearch /></input>
    </form>
  )
}

export default FormSearch
