import './index.css'

const TabItem = props => {
  const {eachListOf} = props
  const {displayText} = eachListOf
  return <li className="listOfff">{displayText}</li>
}

export default TabItem
