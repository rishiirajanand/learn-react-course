//React with JS

// const reactHeading = React.createElement('h1', {className:'head',id:'head'}, 'Hello React!!');



// React with JSX (JavaScript + HTML = JSX)

const jsx = (
    // <React.Fragment>
    //     <h1 className="head">Hello JSX</h1>
    //     <p id="para">Hii I'm Para</p>
    // </React.Fragment>

    <>
        <h1 className="head">Hello JSX</h1>
        <p id="para">Hii I'm Para</p>
    </>

)

ReactDOM.createRoot(document.getElementById('root')).render(jsx);