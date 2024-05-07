import {useState } from "react"
import useGetEmail from "../useLocalStorage";

export default function Login({togglePage})
{

    // const [email, setEmail] = useState('');
    const {email, setEmail} = useGetEmail();
    const [password, setPassword] = useState('');


    // useEffect(() =>{
    //     const getEmail = localStorage.getItem('email');
    //     if(getEmail){
    //         setEmail(getEmail)
    //     }
    // },[])

    // useEffect(()=>{
    //     localStorage.setItem('email', email);
    // },[email]);

    

    return(
        <div className="login">
            <h1>Welcome!</h1>
            <h1>Login to the Portal!!</h1>
            <form>
                <input 
                    type="email"  
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                /><br />

                <input type="password" name="pwd" id="pwd" placeholder="Enter password"/> <br />

                <button type="submit" className="loginBtn">Submit</button>
                <button onClick={togglePage}>Forget Password</button>
            </form>
        </div>
    )
}