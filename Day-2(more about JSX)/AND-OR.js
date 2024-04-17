function And(){
    let isLoggedIn = true;
    return (
        <>
            <h1>Hello {isLoggedIn ? 'Alexa' : 'User'}!!</h1>
            {isLoggedIn && <p>Welcome to the Portal</p>}
        </>
    )
}


function Or(){
    let isLoggedIn = true;
    let fname = 'Alexa';
    let lname = 'Siri'
    return (
        <>
            <h1>Hello {isLoggedIn ? '' || fname : 'User'}!!</h1>
            {isLoggedIn && <p>Welcome to the Portal</p>}
        </>
    )
}

function App(){
    // return <And/>
    return <Or/>
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)