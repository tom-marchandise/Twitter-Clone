import images from '../../assets/exportImg.js'
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useUser } from '../userContext.jsx'


function DisplayCom ({ bords }) {
  const { id } = useParams()
  const { user } = useUser()

  const [tweets, setTweets] = useState([])
  const getTweets = async () => {
    try {
      await fetch('http://127.0.0.1:8000/api/getTweetId' + id)
        .then(res => res.json()).then(data => {
          setTweets(data)
        })
    } catch (error) {
      console.error('Erreur lors de la récupération des tweets : ', error)
    }
  }
  useEffect(() => {
    getTweets()
    const inter = setInterval(() => {
      getTweets()
    }, 10000)
    return () => clearInterval(inter)
  }, [])

  function wrapTags (content) {
    const classe = 'text-sky-500 hover:underline'
    const regex = /\s/
    const splittedContent = content.split(regex)
    splittedContent.forEach(async (element, index) => {
      if (element[0] === '#') splittedContent[index] = <Link key={element + '-' + index} to={'/hashtag/' + element.substring(1, element.length)} className={classe}>{element + ' '}</Link>
      else if (element[0] === '@') splittedContent[index] = <Link key={element + '-' + index} to={'/profile/' + element.substring(1, element.length)} className={classe}>{element + ' '}</Link>
      else splittedContent[index] = (element + ' ')
    })
    return splittedContent
  }

  return <>
        {tweets.map(tweet => (
            <div className={bords} key={tweet.id}>
                <div className='pt-2 pl-4'>
                    <img src={tweet.pdp ? `http://127.0.0.1:8000/storage/${tweet.pdp}` : images.avatar} alt="Profile picture" className={'rounded-full w-[40px] h-[40px]'} />
                </div>
                <div className='w-full p-2'>
                    <div className='flex'>
                        <span className='flex items-center font-bold'>{tweet.name}</span>
                        <span className='pl-2 text-sm text-gray-500 flex items-center'>{tweet.username}</span>
                        <span className='text-gray-500 pl-1'>·</span>
                        <span className='text-gray-500 pl-1 text-sm flex items-center'>10h</span>
                    </div>
                  <div>
                    <p>{tweet.body ? wrapTags(tweet.body) : ''}</p>

                  {!!tweet.imageURL && <img src={`http://127.0.0.1:8000/storage/${tweet.imageURL}`} alt=""
                                                  className={'mt-3 mb-1 rounded-xl border-gray-300 border-[1px]'} />}
                    </div>
                    <div className='flex justify-around pr-6 pt-4 pb-2'>
                        <div
                            className='flex items-center stroke-gray-500 fill-gray-500 text-gray-500 hover:fill-sky-500 hover:stroke-sky-500 hover:text-sky-500'>
                            <svg className='w-4 h-4' viewBox="0 0 24 24" aria-hidden='true'>
                                <path
                                    d='M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z'></path>
                            </svg>
                            <span className='text-sm'>300</span>
                        </div>
                        <div
                            className='flex items-center stroke-gray-500 fill-gray-500 text-gray-500 hover:fill-green-500 hover:stroke-green-500 hover:text-green-500'>
                            <svg className='w-4 h-4' viewBox="0 0 24 24">
                                <path
                                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                            </svg>
                            <span className='text-sm'>500</span>
                        </div>
                        <div
                            className='flex items-center stroke-gray-500 fill-gray-500 text-gray-500 hover:fill-red-500 hover:stroke-red-500 hover:text-red-500'>
                            <svg className='w-4 h-4' viewBox="0 0 24 24">
                                <path
                                    d='M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'></path>
                            </svg>
                            <span className='text-sm'>1000</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
}

function DisplayComId ({ bords }) {
  const { id } = useParams()
  const { user } = useUser()

  const [coms, setComs] = useState([])
  const getComs = async () => {
    try {
      await fetch('http://127.0.0.1:8000/api/getComs' + id)
        .then(res => res.json()).then(data => {
          setComs(data)
        })
    } catch (error) {
      console.error('Erreur lors de la récupération des tweets : ', error)
    }
  }

  useEffect(() => {
    getComs()
  }, [])

  function wrapTags (content) {
    const classe = 'text-sky-500 hover:underline'
    const regex = /\s/
    const splittedContent = content.split(regex)
    splittedContent.forEach(async (element, index) => {
      if (element[0] === '#') splittedContent[index] = <Link key={element + '-' + index} to={'/hashtag/' + element.substring(1, element.length)} className={classe}>{element + ' '}</Link>
      else if (element[0] === '@') splittedContent[index] = <Link key={element + '-' + index} to={'/profile/' + element.substring(1, element.length)} className={classe}>{element + ' '}</Link>
      else splittedContent[index] = (element + ' ')
    })
    return splittedContent
  }

  return <>
        {coms.map(com => (
            <div className={bords} key={com.id}>
                <div className='pt-2 pl-4'>
                    <img src={user.pdp ? `http://127.0.0.1:8000/storage/${user.pdp}` : images.avatar} alt="Profile picture" className={'rounded-full w-[40px] h-[40px]'} />
                </div>
                <div className='w-full p-2'>
                    <div className='flex'>
                        <span className='flex items-center font-bold'>{com.name}</span>
                        <span className='pl-2 text-sm text-gray-500 flex items-center'>{com.username}</span>
                        <span className='text-gray-500 pl-1'>·</span>
                        <span className='text-gray-500 pl-1 text-sm flex items-center'>10h</span>
                    </div>
                    <div>
                      <p>{com.body ? wrapTags(com.body) : ''}</p>
                      {!!com.imageURL && <img src={`http://127.0.0.1:8000/storage/${com.imageURL}`} alt=""
                                                  className={'mt-3 mb-1 rounded-xl border-gray-300 border-[1px]'} />}
                    </div>
                    <div className='flex justify-around pr-6 pt-4 pb-2'>
                        <div
                            className='flex items-center stroke-gray-500 fill-gray-500 text-gray-500 hover:fill-sky-500 hover:stroke-sky-500 hover:text-sky-500'>
                            <svg className='w-4 h-4' viewBox="0 0 24 24" aria-hidden='true'>
                                <path
                                    d='M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z'></path>
                            </svg>
                            <span className='text-sm'>300</span>
                        </div>
                        <div
                            className='flex items-center stroke-gray-500 fill-gray-500 text-gray-500 hover:fill-green-500 hover:stroke-green-500 hover:text-green-500'>
                            <svg className='w-4 h-4' viewBox="0 0 24 24">
                                <path
                                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                            </svg>
                            <span className='text-sm'>500</span>
                        </div>
                        <div
                            className='flex items-center stroke-gray-500 fill-gray-500 text-gray-500 hover:fill-red-500 hover:stroke-red-500 hover:text-red-500'>
                            <svg className='w-4 h-4' viewBox="0 0 24 24">
                                <path
                                    d='M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'></path>
                            </svg>
                            <span className='text-sm'>1000</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
}

export { DisplayCom, DisplayComId }
