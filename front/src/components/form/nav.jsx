import { Link } from 'react-router-dom'

function ButtonLink() {
  return (
    <div className="w-[50%] flex justify-around">
      <Link className="text-white border border-white p-2 rounded-sm" to="/">
        Inscription
      </Link>
      <Link
        className="text-white border border-white p-2 rounded-sm"
        to="/signin"
      >
        Connection
      </Link>
    </div>
  )
}

export default ButtonLink
