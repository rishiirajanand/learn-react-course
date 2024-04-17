
let  sum = ()=>   9*5;

const header = <h2>Hii return JSX value</h2>;

function App(){

    const name = 'JSX'
    const age = 12;
    const nulValue = null;
    const boolValue = false;
    let num;

    return (
        <React.Fragment>
            <h1>Let's learn {name}</h1>
            <h2>age : {age}</h2>
            <h2>Null Value {nulValue}</h2>
            <h2>Boolean Value : {boolValue.toString()}</h2>
            <h2>Undefined : {num}</h2>
            <h2>Calling function : {sum()}</h2>
            {header}
            
        </React.Fragment>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
