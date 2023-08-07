import { createContext } from 'react'

const userContext = createContext({
  userName: '',
  changeUserName: () => {},
})
export default userContext
