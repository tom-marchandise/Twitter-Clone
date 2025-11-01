import '../../output.css'
import images from '../../assets/exportImg.js'
import { useState, useRef } from 'react'
import { useUser } from '../userContext.jsx'

function WriteTweet () {
  const { user } = useUser()
  const textAreaRef = useRef(null)
  const [image, setImage] = useState('')
  const [displayEraseButton, setDisplayEraseButton] = useState('hidden')
  const [textContent, setTextContent] = useState('')
  // const [predHtag, setPredHtag] = useState([])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!textContent.length && !image) return
    const formData = new FormData(e.target)
    const idUser = JSON.stringify(user.id)
    formData.append('userId', idUser)
    console.log(formData)
    formData.append('text', textContent)
    if (image !== '') {
      formData.append('file', image)
    }
    fetch('http://127.0.0.1:8000/api/postTweet', {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml, text/plain, text/html'
      },
      body: formData
    })
    setTextContent('')
    setImage('')
    textAreaRef.current.value = ''
  }
    console.log(textAreaRef)
  const handleChangeTextArea = (e) => {
    setTextContent(textAreaRef.current.value)
    /* const splittedContent = textAreaRef.current.value.split(/\s/)
      console.log(splittedContent)
    splittedContent.forEach((element, index) => {
        if (element[0] === '#') {
            let elem = element.substring(1, element.length)
            fetch(`http://127.0.0.1:8000/api/predHtag/${elem}`)
                .then(res => res.json()).then(data => {
                    console.log(data)
                    setPredHtag(data)
                console.log(predHtag)
            })
        }
    }) */
    if (textAreaRef.current.value.length > 140) {
      setTextContent(textContent.substring(0, 140))
      textAreaRef.current.value = textContent
    }
  }

  const handleImageErase = () => {
    setDisplayEraseButton('hidden')
    setImage('')
  }

  const FileImgHandler = (e) => {
    setDisplayEraseButton('block')
    const currentFile = e.target.files[0]
    currentFile.url = URL.createObjectURL(e.target.files[0])
    setImage(currentFile)
  }
  return <>
        <div className='border-b-[1px] border-l-[1px] border-r-[1px] border-gray-300 flex justify-center flex-col'>
            <div className='flex justify-start w-full p-4'>
                <img src={user.pdp ? `http://127.0.0.1:8000/storage/${user.pdp}` : images.avatar} alt="photo de profil" className='rounded-full w-[40px] h-[40px]'/>
                <form action="" className='w-[100%]' onSubmit={handleOnSubmit}>
                    <textarea rows='4' ref={textAreaRef} onChange={(e) => {handleChangeTextArea()}}
                              className='w-[100%] outline-0 ml-4  placeholder:items-center placeholder:text-xl'
                              placeholder='Quoi de neuf ?!'/>
                    <img src={image.url} alt="" className='rounded-xl'/>
                    {!!image && <button onClick={handleImageErase} className={`bg-blue-500 text-white px-4 py-2 mt-2 rounded-full justify-end ${displayEraseButton}`}>Effacer image</button>}
                    <div className='flex justify-between mt-2 border-t-[1px] border-t-gray-300 pt-2 mr-4'>
                        <div className='flex items-center'>
                            <label htmlFor='imgFile' className='pr-3 cursor-pointer'>
                                <input type="file" id='imgFile' accept='image/*' className='hidden'
                                       onChange={FileImgHandler}/>
                                <img src={images.imgIcon} alt="icone d'image" className='w-5 h-5'/>
                            </label>
                            <label htmlFor="gifFile" className='pr-3 cursor-pointer'>
                                <input type="file" id='gifFile' accept='image/gif' className='hidden'
                                       onChange={FileImgHandler}/>
                                <img src={images.gifIcon} alt="icone gif" className='w-5 h-5'/>
                            </label>
                        </div>
                        <input type="submit" value='Poster' className={` text-white px-4 py-2 rounded-full justify-end ${textContent || image ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300 cursor-not-allowed'} `}/>
                    </div>
                </form>
            </div>

        </div>
    </>
}

export default WriteTweet
