import { Link } from 'react-router-dom'
import { useUser } from '../userContext.jsx'


function Div ({ href, classDiv, classImg, classTitre, text, d }) {
  const { user } = useUser()
  let handleClick = () => {
    console.log(user.id)
  }
  return <Link onClick={handleClick} to={href}>
        <div className={classDiv}>
            <svg className={classImg}>
                <path d={d}></path>
            </svg>
            <span className={classTitre}>{text}</span>
        </div>
    </Link>
}
export default Div
