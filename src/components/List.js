import { nanoid } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Entry from './Entry';
import { selectPokemon } from '../redux/slice'
import { fetchPokemon } from '../redux/slice';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const List = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);
  const [page, setPage] = useState(1)
  const [limit] = useState(25)

  useEffect(() => {
    dispatch(fetchPokemon({page, limit}))
  }, [page, limit, dispatch])

  const incrementPage = () => {
    if(page <= 6)
      setPage(page => page + 1)
  }

  const decrementPage = () => {
    if(page >= 2) {      
      setPage(page => page - 1)
    }
  }

  return (
    <div>
      <div class='d-flex justify-content-between m-1'>
        <div class='btn-group' role='group'>
          <button type='button' class='btn btn-primary btn-block' onClick={incrementPage}>+</button>
          <button type='button' class='btn btn-primary btn-block' onClick={decrementPage}>-</button>
        </div>
        <span>{page}/7</span>
      </div>
      <div class='float-right'>
      </div>
      <div className='App d-flex flex-row flex-wrap'>
      {
        pokemon.map((monster, id) => {
          return <Entry 
            className='p-2'
            key={nanoid()} 
            {...monster}
          />
        })
      }
      </div>
    </div>
  )
}

export default List;