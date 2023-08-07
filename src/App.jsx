import { useState } from 'react'
import userContext from './context/UserContext'
import './App.css'
import User from './components/User'
import ChangeUser from './components/ChangeUser'

function App() {
  const [user, setUser] = useState('Nikita')

  return (
    <userContext.Provider value={{ userName: user, changeUserName: setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </userContext.Provider>
  )
}

export default App
