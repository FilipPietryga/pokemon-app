import '../styles/scss/types.scss'

const Type = ({name}) => {
  return (
    <span 
      className={name + ' rounded'}>
      {name}
    </span>
  )
}

export default Type;