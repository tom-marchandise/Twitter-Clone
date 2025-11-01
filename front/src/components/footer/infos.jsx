import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Infos ({ href, text }) {
  return <>
        <Link to={href} target={'_blank'}>
            <span className={'m-2 text-xs text-gray-600 hover:underline'}>{text}</span>
        </Link>
    </>
}

export default Infos
