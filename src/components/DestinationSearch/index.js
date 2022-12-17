import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {id, name, imgUrl} = destinationsList

  return (
    <li className="destination-card-container">
      <div className="user-details-container">
        <img src={imgUrl} className="pic" alt={name} />
        <p className="place-name"> {name} </p>
      </div>
    </li>
  )
}

export default DestinationSearch
