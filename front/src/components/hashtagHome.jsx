import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'
import DisplayHashtags from './corps/displayHashtags.jsx'
import Timeline from './corps/timeline.jsx'

function HashtagHome () {
  const Div = 'border-b-[1px] border-l-[1px] border-r-[1px] border-gray-300 flex justify-center hover:bg-gray-100'

  return <>
        <Navbar/>
        <div className='w-[35%]'>
            <Timeline bords={Div} text={'Hashtags'}/>
            <DisplayHashtags bords={Div}/>
        </div>
        <Footer/>
    </>
}

export default HashtagHome
