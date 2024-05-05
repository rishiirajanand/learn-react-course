
export default function Login({togglePage})
{

    return(
        <div className="login">
            <h1>Welcome!</h1>
            <h1>Login to the Portal!!</h1>
            <form>
                <input type="email"  placeholder="Enter email"/><br />

                <input type="password" name="pwd" id="pwd" placeholder="Enter password"/> <br />

                <button type="submit" className="loginBtn">Submit</button>
                <button onClick={togglePage}>Forget Password</button>
            </form>
        </div>
    )
}