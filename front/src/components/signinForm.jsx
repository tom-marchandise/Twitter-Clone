import Input from './form/input.jsx'
import ButtonLink from './form/nav.jsx'
import { useNavigate } from 'react-router-dom'
import { useUser } from './userContext.jsx'


function Signin() {
  const navigate = useNavigate()
  const { setUser } = useUser()

  const handleSubmit = async (e) => {
    e.preventDefault() // Empêche le formulaire de recharger la page

    const formData = new FormData(e.target)
    const data = {}

    for (const pair of formData.entries()) {
      data[pair[0]] = pair[1]
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const responseData = await response.json()
        const tokenData = {
          token: responseData.token,
          user: responseData.user,
        }
        const tokenPayload = JSON.stringify(tokenData)
        localStorage.setItem('token', tokenPayload) // Suppose responseData contient { token, user }
        alert('connexion réussie ! token et infos stockées.')
        console.log(responseData.user)
        setUser(responseData.user)
        console.log(setUser(responseData.user))
        navigate('/Home') // Assurez-vous que le chemin est correct
      } else {
        const errorMsg = (await response.json()).error || 'Combinaison invalide'
        alert(errorMsg)
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error)
      alert('Erreur lors de la connexion')
    }
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-between border p-7 rounded-lg h-[80%] w-[50%] bg-blue-500">
          <h1 className=" text-[74px] text-white font-bold">Connexion</h1>
          <form
            className="flex flex-col gap-4 w-[50%] h-[30%] justify-center"
            onSubmit={handleSubmit}
          >
            <Input
              className="h-16 w-full"
              type="text"
              placeholder="Email"
              name="email"
            />
            <Input
              className="h-16 w-full"
              type="password"
              placeholder="password"
              name="pass"
            />
            <Input
              className="h-12 bg-white"
              type="submit"
              value="Se connecter"
            />
          </form>
          <ButtonLink />
        </div>
      </div>
    </>
  )
}

export default Signin
