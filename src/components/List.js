import { nanoid } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Entry from './Entry';
import { selectPokemon } from '../redux/slice'
import { fetchPokemon } from '../redux/slice';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Description from './Description';

const List = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);
  const [page, setPage] = useState(1)
  const [limit] = useState(25)
  const [toggled, setToggled] = useState({})

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

  const toggleDescription = (name) => {
    console.log(toggled)
    setToggled({
      ...toggled,
      [name]: !toggled[name]
    })
  }

  return (
    <div>
      <div className='d-flex justify-content-between m-1'>
        <div className='btn-group' role='group'>
          <button type='button' className='btn btn-primary btn-block' onClick={incrementPage}>+</button>
          <button type='button' className='btn btn-primary btn-block' onClick={decrementPage}>-</button>
        </div>
        <span>{page}/7</span>
      </div>
      <div className='App d-flex flex-row flex-wrap'>
      {
        pokemon.map((monster, id) => {
          return (<button 
            type='button'
            key={nanoid()} 
            onClick={() => toggleDescription(monster.name)}>
              <Entry 
                className='p-2'
                {...monster}
              />
              {toggled[monster.name] ? <Description {...monster}/> : null}
          </button>)
        })
      }
      </div>
    </div>
  )
}

export default List;