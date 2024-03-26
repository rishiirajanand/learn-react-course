
const IMAGES = [
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg"
  ];

function Login()
{
    return (
        <>
            <form autoComplete='on'>
                <h1>Login to Continue</h1>
                <input type="email" name='email' id='email' autoComplete='rishi@gmail.com' placeholder='Enter Email'/>
                <input type='password' naame='password' id='password' autoComplete='123' placeholder='Enter Password' />
                <input type='submit' name='subBtn' id='subBtn' />
            </form>
            
        </>
    )
}

function Home()
{
    return (
        <React.Fragment>
            <h1>Welcome to Home!!</h1>
            <p>Enjoy the catalog of picture!!</p>
            {IMAGES.map((i,index)=> {
                return <img key={index} src={i} width='300px' />
            })}
        </React.Fragment>
    )
}

let isLogin = false;
const App = ()=> isLogin? <Home/> : <Login/>


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


