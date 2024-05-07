// import { useEffect, useState } from "react"

import useGetEmail from "../useLocalStorage"

export default function Forget({togglePage})
{
    // const [email, setEmail] = useState('');
    const {email, setEmail} = useGetEmail();

    // useEffect(()=>{
    //     const getEmail = localStorage.getItem('email');
    //     if(getEmail){
    //         setEmail(getEmail)
    //     }
    // });

    // useEffect(()=>{
    //     localStorage.setItem('email', email)
    // },[email])

    return(
        <div className="login">
            <h1>Welcome!</h1>
            <h1>Reset Your Password</h1>
            <form>
                <input 
                    type="email"  
                    placeholder=""
                    disabled
                    value={email}
                /><br />
                
                <button type="submit" className="continueBtn">Continue</button>
                <button onClick={togglePage}>Back to Login</button>
            </form>
        </div>
    )
}