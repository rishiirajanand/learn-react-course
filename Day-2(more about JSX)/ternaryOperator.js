function App(){
    let isLoggedIn = true;
    return (
        <>
            <h1>Hello {isLoggedIn ? 'Alexa' : 'User'}!!</h1>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)