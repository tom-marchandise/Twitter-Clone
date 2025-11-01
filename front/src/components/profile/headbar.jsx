import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom'
import { useUser } from '../userContext'

function Headbar () {
    const {user} = useUser()
        const {username} = useParams()
        const [userProfile, setUserProfile] = useState([])
        useEffect(() => {
            getUser()
        }, [])
        const getUser = async () => {
            await fetch(`http://127.0.0.1:8000/api/getUser/@${username}`)
                .then(res => res.json()).then(data => {
                    setUserProfile(data[0])
                })
        }

        return <button className={'w-[100%]'}>
            <div className={'h-14 flex items-center border-b-[1px]'}>
                <Link to={'/Home'} className={'pr-0.5 pb-0.5 ml-2 hover:bg-gray-200 rounded-full'}>
                    <svg className={'w-5 h-5 m-2'}>
                        <path d={'M 7.414 13 l 5.043 5.04 l -1.414 1.42 L 3.586 12 l 7.457 -7.46 l 1.414 1.42 ' +
                            'L 7.414 11 H 21 v 2 H 7.414 Z'}></path>
                    </svg>
                </Link>
                <div className={'ml-6 flex flex-col text-left'}>
                    <span className={'font-bold text-lg'}>{userProfile.name}</span>
                    <span className={'text-sm text-gray-500'}>0 post</span>
                </div>
            </div>
        </button>
    }


export default Headbar

