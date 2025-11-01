import { classes } from './classes.jsx'
import { Link } from 'react-router-dom'
import Div from './div.jsx'
import PostDiv from './postdiv.jsx'
import UserDiv from './userdiv.jsx'
// eslint-disable-next-line no-unused-vars
import * as React from 'react'

import { useUser } from '../userContext.jsx'

function Navbar () {
  const { user } = useUser()
  return <header role="banner" className="w-[30%] flex sticky top-0 h-fit">
        <div className="w-[55%] h-[100vh] ml-auto flex flex-col justify-between">
            <div>

                <div className={classes.div_l}>
                    <Link to="/Home">
                        <img className="w-8" src="../src/assets/X-Logo.png" alt="logo"></img>
                    </Link>
                </div>

                <nav className="w-60">
                    <Div href={'/Home'} d={'M 21.591 7.146 L 12.52 1.157 c -0.316 -0.21 -0.724 -0.21 -1.04 0 l ' +
                        '-9.071 5.99 c -0.26 0.173 -0.409 0.456 -0.409 0.757 v 13.183 c 0 0.502 0.418 0.913 0.929 ' +
                        '0.913 h 6.638 c 0.511 0 0.929 -0.41 0.929 -0.913 v -7.075 h 3.008 v 7.075 c 0 0.502 0.418 ' +
                        '0.913 0.929 0.913 h 6.639 c 0.51 0 0.928 -0.41 0.928 -0.913 V 7.904 c 0 -0.301 -0.158 -0.584 ' +
                        '-0.408 -0.758 Z M 20 20 l -4.5 0.01 l 0.011 -7.097 c 0 -0.502 -0.418 -0.913 -0.928 -0.913 ' +
                        'H 9.44 c -0.511 0 -0.929 0.41 -0.929 0.913 L 8.5 20 H 4 V 8.773 l 8.011 -5.342 L 20 8.764 Z'}
                         text={'Home'} classImg={classes.img} classTitre={classes.h2} classDiv={classes.div}/>
                    <Div href={'https://grafikart.fr'} d={'M 10.25 3.75 c -3.59 0 -6.5 2.91 -6.5 6.5 s 2.91 6.5 6.5 ' +
                        '6.5 c 1.795 0 3.419 -0.726 4.596 -1.904 c 1.178 -1.177 1.904 -2.801 1.904 -4.596 c 0 -3.59 ' +
                        '-2.91 -6.5 -6.5 -6.5 Z m -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 -8.5 s 8.5 3.806 8.5 8.5 c 0 ' +
                        '1.986 -0.682 3.815 -1.824 5.262 l 4.781 4.781 l -1.414 1.414 l -4.781 -4.781 c -1.447 1.142 ' +
                        '-3.276 1.824 -5.262 1.824 c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z'}
                         text={'Explore'} classImg={classes.img} classTitre={classes.h2} classDiv={classes.div}/>
                    <Div href={'https://grafikart.fr'} d={'M 19.993 9.042 C 19.48 5.017 16.054 2 11.996 2 s -7.49 ' +
                        '3.021 -7.999 7.051 L 2.866 18 H 7.1 c 0.463 2.282 2.481 4 4.9 4 s 4.437 -1.718 4.9 -4 h ' +
                        '4.236 l -1.143 -8.958 Z M 12 20 c -1.306 0 -2.417 -0.835 -2.829 -2 h 5.658 c -0.412 1.165 ' +
                        '-1.523 2 -2.829 2 Z m -6.866 -4 l 0.847 -6.698 C 6.364 6.272 8.941 4 11.996 4 s 5.627 2.268 ' +
                        '6.013 5.295 L 18.864 16 H 5.134 Z'}
                         text={'Notification'} classImg={classes.img} classTitre={classes.h2} classDiv={classes.div}/>
                    <Div href={'https://grafikart.fr'} d={'M 1.998 5.5 c 0 -1.381 1.119 -2.5 2.5 -2.5 h 15 c 1.381 0 ' +
                        '2.5 1.119 2.5 2.5 v 13 c 0 1.381 -1.119 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.119 -2.5 -2.5 ' +
                        'v -13 Z m 2.5 -0.5 c -0.276 0 -0.5 0.224 -0.5 0.5 v 2.764 l 8 3.638 l 8 -3.636 V 5.5 c 0 ' +
                        '-0.276 -0.224 -0.5 -0.5 -0.5 h -15 Z m 15.5 5.463 l -8 3.636 l -8 -3.638 V 18.5 c 0 0.276 ' +
                        '0.224 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.224 0.5 -0.5 v -8.037 Z"'}
                         text={'Messages'} classImg={classes.img} classTitre={classes.h2} classDiv={classes.div}/>
                    {/* eslint-disable-next-line no-undef */}
                    <Div href={'/profile/' + user.username.substring(1, user.username.length)} d={'M 5.651 19 h 12.698 c -0.337 -1.8 -1.023 -3.21 -1.945 -4.19 C 15.318 ' +
                        '13.65 13.838 13 12 13 s -3.317 0.65 -4.404 1.81 c -0.922 0.98 -1.608 2.39 -1.945 4.19 Z m ' +
                        '0.486 -5.56 C 7.627 11.85 9.648 11 12 11 s 4.373 0.85 5.863 2.44 c 1.477 1.58 2.366 3.8 ' +
                        '2.632 6.46 l 0.11 1.1 H 3.395 l 0.11 -1.1 c 0.266 -2.66 1.155 -4.88 2.632 -6.46 Z M 12 4 c ' +
                        '-1.105 0 -2 0.9 -2 2 s 0.895 2 2 2 s 2 -0.9 2 -2 s -0.895 -2 -2 -2 Z M 8 6 c 0 -2.21 1.791 ' +
                        '-4 4 -4 s 4 1.79 4 4 s -1.791 4 -4 4 s -4 -1.79 -4 -4 Z'}
                         text={'Profile'} classImg={classes.img} classTitre={classes.h2} classDiv={classes.div}/>
                    <Div href={'https://grafikart.fr'} d={'M 3.75 12 c 0 -4.56 3.69 -8.25 8.25 -8.25 s 8.25 3.69 8.25 ' +
                        '8.25 s -3.69 8.25 -8.25 8.25 S 3.75 16.56 3.75 12 Z M 12 1.75 C 6.34 1.75 1.75 6.34 1.75 12 ' +
                        'S 6.34 22.25 12 22.25 S 22.25 17.66 22.25 12 S 17.66 1.75 12 1.75 Z m -4.75 11.5 c 0.69 0 ' +
                        '1.25 -0.56 1.25 -1.25 s -0.56 -1.25 -1.25 -1.25 S 6 11.31 6 12 s 0.56 1.25 1.25 1.25 Z m ' +
                        '9.5 0 c 0.69 0 1.25 -0.56 1.25 -1.25 s -0.56 -1.25 -1.25 -1.25 s -1.25 0.56 -1.25 1.25 s ' +
                        '0.56 1.25 1.25 1.25 Z M 13.25 12 c 0 0.69 -0.56 1.25 -1.25 1.25 s -1.25 -0.56 -1.25 -1.25 ' +
                        's 0.56 -1.25 1.25 -1.25 s 1.25 0.56 1.25 1.25 Z'}
                         text={'More'} classImg={classes.img} classTitre={classes.h2} classDiv={classes.div}/>
                </nav>
                <PostDiv classA={classes.divA} href={'https://grafikart.fr'} classDivA={classes.post}
                         classDivB={classes.divS} text={'Post'}/>
            </div>
            <UserDiv classDivA={classes.divUser} classImgA={classes.imgUser} srcA={'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'}
                     altA={'avatar'} classDivB={classes.divSpan} classTextA={'font-bold'} classTextB={'text-gray-500'}
                     classImgB={classes.imgSpan} srcB={'../src/assets/X-dots.png'} altB={'dropdown'}/>
        </div>
    </header>
}

export default Navbar
