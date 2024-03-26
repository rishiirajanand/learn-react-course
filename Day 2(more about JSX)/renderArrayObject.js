// print array using map
const arr = [1,3,5,6,7]
const App = ()=>{
    return (
        <React.Fragment>
            {arr.map((ele)=> <h1>{ele}</h1>)}
            <ul id="car">
                <h1>Car Brand Name:-</h1>
                {car()}
            </ul>
            {fun()}
        </React.Fragment>
    )
}

// print array using map with giving Key

const carArr = ['BMW', 'Mercides', 'Tesla', 'Audi', 'Mihindra']
function car(){
    return (
            <>
                {carArr.map((ele,index)=><li key={index}>{ele}</li>)}
            </>
    )
}

// use filter method 
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function fun(){
    return (
        <>
          <h1>ES6 Array Iteration Methods</h1>
          {numbers.filter(num=>num%2==0).map(ele=><h3>{ele}</h3>)}
        </>
      );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);