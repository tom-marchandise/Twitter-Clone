import './output.css'
import BodyHome from './components/bodyHome.jsx'
import Signup from './components/signupForm.jsx'
import Signin from './components/signinForm.jsx'
import { Routes, Route } from 'react-router-dom'
import * as React from 'react'
import Profile from './components/profile/profile.jsx'
import CommentHome from './components/commentHome.jsx'
import HashtagHome from './components/hashtagHome.jsx'
import Search from './components/corps/search.jsx'
import { UserProvider } from './components/userContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <>
        <Router>
      <UserProvider>
          <Routes>
            <Route path="/Home" element={<BodyHome />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/Home/:id" element={<CommentHome/>}/>
            <Route path="/hashtag/:htag" element={<HashtagHome/>}/>
            <Route path="/search" element={<Search/>}/>
          </Routes>
      </UserProvider>
        </Router>
    </>
  )
}

export default App
