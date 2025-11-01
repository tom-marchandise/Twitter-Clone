import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'
import { DisplayCom, DisplayComId } from './corps/displayCom.jsx'
import WriteCom from './corps/writeCom.jsx'
import Timeline from './corps/timeline.jsx'

function CommentHome () {
  const Div = 'border-b-[1px] border-l-[1px] border-r-[1px] border-gray-300 flex justify-center hover:bg-gray-100'

  return <>
        <Navbar/>
        <div className='w-[35%]'>
            <Timeline bords={Div} text={'Comments'}/>
            <DisplayCom bords={Div}/>
            <WriteCom/>
            <DisplayComId bords={Div}/>

        </div>
        <Footer/>
    </>
}

export default CommentHome
