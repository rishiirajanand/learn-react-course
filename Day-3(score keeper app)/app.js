let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = 0;

let inputRef = React.createRef();

// function addOne(){
//     if(wicket < 10){
//         score += 1;
//         rootElement.render(<App/>);
//     }
// }
// function addTwo(){
//     if(wicket < 10){
//         score += 2;
//         rootElement.render(<App/>);
//     }
// }

function addScore(num){

    hit = num
    rootElement.render(<App/>);
}

function addWicket(num){
    
    hit = "W"
    rootElement.render(< App />)
}

// BUTTON Componenet
const ScoreButton = ()=>(
    <div>
        <button onClick={()=>addScore(0)}>0</button>
        <button onClick={()=>addScore(1)}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(5)}>5</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={()=>addWicket(1)}>W</button>
    </div>
)

// Result Component
const Result = ()=>(
    <div>
        {ballWiseRes.map((res, index)=>{
            return <React.Fragment key={index}>
                { index%6 === 0 ? <br /> : null }
                <span>{ res===0 ? <strong>.</strong> : res}</span>&nbsp;&nbsp;&nbsp;
            </React.Fragment>
        })}
    </div>
)

function handelSubmit(event){
    event.preventDefault();
    
    ballWiseRes.unshift(`${hit} , ${inputRef.current.value}`)

    if(hit === "W"){
        wicket += 1
    }
    else{
        score += hit;
    }
    hit = 0;
    inputRef.current.value = "";
    rootElement.render(< App />)
}


// FORM Component
const Form = ()=>(
    <form onSubmit={handelSubmit}>
        <input value={hit} readOnly/>
        <input ref={inputRef} placeholder="Add a comment"/>
        <button>Submit</button>
    </form>
)


const App = ()=>{
    return (
        <React.Fragment>
            <h1>SCORE KEEPER</h1>
            <h2>SCORE : {score}/{wicket}</h2>
            < ScoreButton />
            <br/>
            < Form />
            <br/>
            <hr/>
            
            {ballWiseRes.map((res, index)=>(
                <p key={index}>{res}</p>
            ))}
            
           
        </React.Fragment>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(<App/>);