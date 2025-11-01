import Headbar from "./headbar.jsx";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import { useUser } from "../userContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import images from "../../assets/exportImg.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ProfileUsers from './profilUsers.jsx'

function Profile() {
    const { user } = useUser()
  const { username } = useParams()
  const [userProfile, setUserProfile] = useState([])
  useEffect(() => {
    getUser()
  }, [])
  const getUser = async () => {
    await fetch(`http://127.0.0.1:8000/api/getUser/@${username}`)
      .then(res => res.json()).then(data => {
        setUserProfile(data[0])
        console.log(username)
      })
  }
  console.log(userProfile)
  if (user.id !== userProfile.id) {
    return <>
            <ProfileUsers/>
        </>
  }

      const handleImg = (e) => {
        const formData = new FormData();
        const file = e.target.files[0]
        formData.append('file', file);
        const idUser = JSON.stringify(user.id)
        fetch('http://127.0.0.1:8000/api/changeprofileimg' + idUser, {
          method: 'POST',
          body: formData
        })
      }
      console.log(user.pdp)
    


    return  (<>
        <Navbar/>
    <div className='w-[35%] border-l-[1px] border-r-[1px] border-gray-300'>
        <Headbar/>
        <div className={"flex flex-col h-"}>
            <div className={"h-48 bg-gray-300"}></div>
            <div className={"size-fit m-3 -translate-y-20"}>
                <label htmlFor="imgFile" className="pr-3 cursor-pointer">
                <input type="file" id='imgFile' accept='image/*' className='hidden' onChange={(e) => handleImg(e)}/>
                <img className={"w-36 h-36 rounded-full bg-transparent"} src={user.pdp ? `http://127.0.0.1:8000/storage/${user.pdp}` : images.avatar}
                     alt={"avatar"}></img>
                     </label>
                <div className={"flex flex-col text-left mb-4"}>
                <span className={'font-bold text-lg'}>{userProfile.name}</span>
                            <span className={'text-gray-500 text-sm'}>{userProfile.username}</span>
                </div>
                <div className={"flex flex-row items-center mb-3"}>
                    <svg className={"w-6 h-6 stroke-gray-400 fill-gray-300"}>
                        <path d={"M 7 4 V 3 h 2 v 1 h 6 V 3 h 2 v 1 h 1.5 C 19.89 4 21 5.12 21 6.5 v 12 c 0 1.38 " +
                                 "-1.11 2.5 -2.5 2.5 h -13 C 4.12 21 3 19.88 3 18.5 v -12 C 3 5.12 4.12 4 5.5 4 H 7 " +
                                 "Z m 0 2 H 5.5 c -0.27 0 -0.5 0.22 -0.5 0.5 v 12 c 0 0.28 0.23 0.5 0.5 0.5 h 13 c 0.28 " +
                                 "0 0.5 -0.22 0.5 -0.5 v -12 c 0 -0.28 -0.22 -0.5 -0.5 -0.5 H 17 v 1 h -2 V 6 H 9 v 1 H " +
                                 "7 V 6 Z m 0 6 h 2 v -2 H 7 v 2 Z m 0 4 h 2 v -2 H 7 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z " +
                                 "m 0 4 h 2 v -2 h -2 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z"}></path>
                    </svg>
                    <span className={"text-sm text-gray-500"}>Joined March 2024</span>
                </div>
                <div>
                    <span className={"text-sm text-gray-500 hover:underline mr-3"}>Following</span>
                    <span className={"text-sm text-gray-500 hover:underline ml-3"}>Followers</span>
                </div>
            </div>
            <div className={"h-14 flex flex-row"}>
                <div>
                    <span className={"text-gray-500 text-s"}>Post</span>
                </div>
                <div>
                    <span className={"text-gray-500 text-s"}>Replies</span>
                </div>
                <div>
                    <span className={"text-gray-500 text-s"}>Media</span>
                </div>
                <div>
                    <span className={"text-gray-500 text-s"}>Likes</span>
                </div>
            </div>
        </div>
    </div>
        <Footer/>
    </>)
}

export default Profile
