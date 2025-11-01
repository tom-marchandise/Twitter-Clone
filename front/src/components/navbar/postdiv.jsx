// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function PostDiv ({ classA, href, classDivA, classDivB, text }) {
  return <div className="w-60">
        <Link className={classA} to={href}>
            <div className={classDivA}>
                <div className="m-auto">
                    <span className={classDivB}>{text}</span>
                </div>
            </div>
        </Link>
    </div>
}

export default PostDiv
