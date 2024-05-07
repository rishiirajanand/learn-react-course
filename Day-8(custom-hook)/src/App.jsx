import { useState } from "react"
import Forget from "./components/Forget/ForgetPage"
import Login from "./components/Login/LoginPage"


function App() {

  const [flag, setFlag] = useState(false)

  

  const handleLoginForget = (e)=>{
    e.preventDefault();
      setFlag(!flag)
  }
  return (
    <>
      {
        flag 
        ? < Forget togglePage = {handleLoginForget}/> 
        : < Login togglePage = {handleLoginForget}/>
      }
    </>
  )
}

export default App
