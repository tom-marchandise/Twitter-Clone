import { useState } from 'react'
import { useUser } from '../userContext'
import { useNavigate } from 'react-router-dom'
import images from '../../assets/exportImg'

function UserDiv({
  classDivA,
  classDivB,
  classImgA,
  classImgB,
  classTextA,
  classTextB,
  srcA,
  srcB,
  altA,
  altB,
  textA,
  textB,
}) {
  const { user } = useUser()
  const [isModalActive, setIsModalActive] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useUser()

  function handleLogout() {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/signin')
  }

  function handleOptions() {
    setIsModalActive(!isModalActive)
  }

  return (
    <div className={classDivA + ' relative '}>
      <Modal active={isModalActive} />
      <img className={classImgA} src={user.pdp ? `http://127.0.0.1:8000/storage/${user.pdp}` : images.avatar}alt={altA}></img>
      <div className={classDivB}>
        <span className={classTextA}>{user.name}</span>
        <span className={classTextB}>{user.username}</span>
      </div>
      <img
        className={classImgB}
        src={srcB}
        alt={altB}
        onClick={() => handleOptions()}
      ></img>
    </div>
  )

  function Modal({ active }) {
    let hidden = 'hidden'
    if (active) {
      hidden = 'flex'
    }
    return (
      <div
        className={
          hidden +
          ' absolute h-full p-0 items-center justify-center bottom-[100%] right-0 overflow-hidden rounded-lg bg-[#e5e7eb]'
        }
      >
        <button
          className="w-32 h-16 bg-red-500 text-white"
          onClick={() => handleLogout()}
        >
          Deconnexion
        </button>
      </div>
    )
  }
}

export default UserDiv
