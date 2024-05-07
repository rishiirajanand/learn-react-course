import { useState } from "react"

export default function Forget({togglePage})
{
    const [email, setEmail] = useState('');

    return(
        <div className="login">
            <h1>Welcome!</h1>
            <h1>Reset Your Password</h1>
            <form>
                <input type="email"  placeholder="Enter email"/><br />

                <button type="submit" className="continueBtn">Continue</button>
                <button onClick={togglePage}>Back to Login</button>
            </form>
        </div>
    )
}