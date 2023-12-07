import './index.css'

const AppItem = props => {
  const {eachAppItemOf} = props
  const {appName, imageUrl, category} = eachAppItemOf
  return (
    <li className="listOff">
      <img src={imageUrl} className="imgSize" alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
