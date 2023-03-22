// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planets" />
      <h1 className="planets-heading">{name}</h1>
      <p className="planets-para">{description}</p>
    </div>
  )
}

export default PlanetItem
