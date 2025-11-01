import Input from './form/input.jsx'
import ButtonLink from './form/nav.jsx'
function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(new FormData(e.target))
    const formData = new FormData(e.target)
    const data = {}
    for (const pair of formData.entries()) {
      data[pair[0]] = pair[1]
    }
    console.log(data)
    fetch('http://127.0.0.1:8000/api/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col h-[80%] w-[30%] p-4 items-center justify-between bg-blue-500 rounded-lg">
          <h1 className="text-[3rem] text-white">Inscription</h1>
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={handleSubmit}
          >
            <Input
              className="w-full"
              type="text"
              placeholder="Username"
              name="username"
            />
            <Input
              className="w-full"
              type="text"
              placeholder="Name, Lastname"
              name="name"
            />
            <Input className="w-full" type="date" name="birthdate" />
            <Input
              className="w-full"
              type="mail"
              placeholder="Your mail"
              name="email"
            />
            <Input
              type="password"
              placeholder="Choose a password"
              name="pass"
            />
            <button className="text-white border rounded-md border-white p-2">
              S'inscrire
            </button>
          </form>
          <ButtonLink />
        </div>
      </div>
    </>
  )
}

export default Signup
