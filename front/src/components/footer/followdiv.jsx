import * as React from 'react'

// eslint-disable-next-line react/prop-types
function FollowDiv ({ classA, classDivA, classDivB, text }) {
  return <div className="w-10">
        <button className={classA}>
            <div className={classDivA}>
                <div className="m-auto">
                    <span className={classDivB}>{text}</span>
                </div>
            </div>
        </button>
    </div>
}

export default FollowDiv
