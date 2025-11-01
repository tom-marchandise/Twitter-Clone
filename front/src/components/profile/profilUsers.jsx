import Headbar from './headbar.jsx'
import Navbar from '../navbar/navbar.jsx'
import Footer from '../footer/footer.jsx'
import { useUser } from '../userContext.jsx'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { classes } from '../navbar/classes.jsx'
import FollowDiv from '../footer/followdiv.jsx'
import Profile from './profile.jsx'
import images from '../../assets/exportImg.js'

function ProfileUsers () {
  const { user } = useUser()
  const { username } = useParams()
  const [userProfile, setUserProfile] = useState([])
  useEffect(() => {
    getUser()
  }, [])

  if (user.id === userProfile.id) {
    return <>
            <Profile/>
        </>
  }

  const getUser = async () => {
    await fetch(`http://127.0.0.1:8000/api/getUser/@${username}`)
      .then(res => res.json()).then(data => {
        setUserProfile(data[0])
        console.log(username)
      })
  }
  console.log(userProfile)
  return <>
        <Navbar/>
        <div className='w-[35%] border-l-[1px] border-r-[1px] border-gray-300'>
            <Headbar/>
            <div className={'flex flex-col h-'}>
                <div className={'h-48 bg-gray-300'}></div>
                <div className={'size-fit m-3 -translate-y-20'}>
                    <img className={'w-32 h-32 rounded-full border-white border-[4px] bg-transparent'}
                         src={user.pdp ? `http://127.0.0.1:8000/storage/${user.pdp}` : images.avatar}
                         alt={'avatar'}></img>
                    <div className={'flex flex-col text-left mb-4 mt-2 ml-2'}>
                        {/* eslint-disable-next-line no-undef */}
                        <span className={'font-bold text-lg'}>{userProfile.name}</span>
                        <span className={'text-gray-500 text-sm'}>{userProfile.username}</span>
                    </div>
                    <div className={'flex flex-row items-center mb-3 ml-2'}>
                        <svg className={'w-6 h-6 stroke-gray-400 fill-gray-300'}>
                            <path
                                d={'M 7 4 V 3 h 2 v 1 h 6 V 3 h 2 v 1 h 1.5 C 19.89 4 21 5.12 21 6.5 v 12 c 0 1.38 ' +
                                    '-1.11 2.5 -2.5 2.5 h -13 C 4.12 21 3 19.88 3 18.5 v -12 C 3 5.12 4.12 4 5.5 4 H 7 ' +
                                    'Z m 0 2 H 5.5 c -0.27 0 -0.5 0.22 -0.5 0.5 v 12 c 0 0.28 0.23 0.5 0.5 0.5 h 13 c 0.28 ' +
                                    '0 0.5 -0.22 0.5 -0.5 v -12 c 0 -0.28 -0.22 -0.5 -0.5 -0.5 H 17 v 1 h -2 V 6 H 9 v 1 H ' +
                                    '7 V 6 Z m 0 6 h 2 v -2 H 7 v 2 Z m 0 4 h 2 v -2 H 7 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z ' +
                                    'm 0 4 h 2 v -2 h -2 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z'}></path>
                        </svg>
                        <span className={'text-sm text-gray-500'}>Joined March 2024</span>
                    </div>
                    <div className={'ml-2'}>
                        <span className={'text-sm text-gray-500 hover:underline mr-3'}>Following</span>
                        <span className={'text-sm text-gray-500 hover:underline ml-3'}>Followers</span>
                    </div>
                </div>
                <div className={'ml-10 translate-x-96 -translate-y-64'}>
                    <FollowDiv classA={classes.divB} classDivA={classes.follow}
                               classDivB={classes.divF} text={'Follow'}/>
                </div>
                <div className={'h-14 flex flex-row -translate-y-16'}>
                    <button className={'w-[25%] flex items-center justify-center hover:bg-gray-200'}>
                        <span className={'text-gray-500 text-s'}>Post</span>
                    </button>
                    <button className={'w-[25%] flex items-center justify-center hover:bg-gray-200'}>
                        <span className={'text-gray-500 text-s'}>Replies</span>
                    </button>
                    <button className={'w-[25%] flex items-center justify-center hover:bg-gray-200'}>
                        <span className={'text-gray-500 text-s'}>Media</span>
                    </button>
                    <button className={'w-[25%] flex items-center justify-center hover:bg-gray-200'}>
                        <span className={'text-gray-500 text-s'}>Likes</span>
                    </button>
                </div>
                <div>
                    <svg
                        d={'M 1.998 5.5 c 0 -1.381 1.119 -2.5 2.5 -2.5 h 15 c 1.381 0 2.5 1.119 2.5 2.5 v 13 c 0 1.381 -1.119 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.119 -2.5 -2.5 v -13 Z m 2.5 -0.5 c -0.276 0 -0.5 0.224 -0.5 0.5 v 2.764 l 8 3.638 l 8 -3.636 V 5.5 c 0 -0.276 -0.224 -0.5 -0.5 -0.5 h -15 Z m 15.5 5.463 l -8 3.636 l -8 -3.638 V 18.5 c 0 0.276 0.224 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.224 0.5 -0.5 v -8.037 Z"'}></svg>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default ProfileUsers
