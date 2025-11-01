import UserDiv from '../navbar/userdiv.jsx'
import { classes } from '../navbar/classes.jsx'
import FollowDiv from './followdiv.jsx'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Followsuggest () {
  return <div className={'h-20 flex flex-row items-center hover:bg-gray-200'}>
    <UserDiv classDivA={classes.divUser} classImgA={classes.imgUser} srcA={'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'}
                    altA={'avatar'} classDivB={classes.divSpan} classTextA={'font-bold'} textA={'projet test'}
                    classTextB={'text-gray-500'} textB={'@projettest6626'}/>
    <FollowDiv classA={classes.divB} classDivA={classes.follow}
               classDivB={classes.divF} text={'Follow'}/>
    </div>
}

export default Followsuggest
