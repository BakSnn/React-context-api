import { useContext, useRef, useState } from 'react'
import userContext from '../context/UserContext'

function ChangeUser() {
  const { changeUserName } = useContext(userContext)
  const [enteredName, setEnteredName] = useState('')

  const handleChange = (event) => {
    setEnteredName(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }
  const changeName = () => {
    changeUserName(enteredName.length > 1 ? enteredName : 'Error')
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          <input
            minLength={2}
            placeholder="Enter User Name"
            typе="text"
            value={enteredName}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit" onClick={changeName}>
          Change User
        </button>
      </form>
    </>
  )
}

export default ChangeUser
