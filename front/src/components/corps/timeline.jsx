import '../../output.css'

function Timeline ({ bords, text }) {
  const div = `${bords} px-4`
  return <>
        <div className={div}>
            <h2 className='after:block after:border-2 after:border-blue-500 after:rounded-md pt-2 leading-10'>{text}</h2>
        </div>
    </>
}

export default Timeline
