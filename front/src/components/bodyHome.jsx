import Timeline from './corps/timeline.jsx'
import WriteTweet from "./corps/writeTweet.jsx"
import DisplayTweetMedia from "./corps/displayTweetMedia.jsx"
import Navbar from "./navbar/navbar.jsx";
import Footer from "./footer/footer.jsx";
import { useUser } from './userContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function BodyHome () {
    const navigate = useNavigate()
    const { user } = useUser()
    
    const Div = 'border-b-[1px] border-l-[1px] border-r-[1px] border-gray-300 flex justify-center hover:bg-gray-100'
    return(<>
        <Navbar/>
        <div className='w-[35%]'>
            <Timeline bords={Div} text={'Time Line'}/>
            <WriteTweet/>
            <DisplayTweetMedia bords={Div}/>
        </div>
        <Footer/>
    </>)
}

export default BodyHome
