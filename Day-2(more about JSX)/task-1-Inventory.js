const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
  ];


function Products(){
    return (
        <React.Fragment>
            <h1>Inventory Management System</h1>
            <table border="1px" width='400px'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>QUENTITY</th>
                    </tr>  
                </thead>
                <tbody>
                    {
                        itemsSold.map((e,index)=>{
                            return <tr key={index}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.qty}</td>
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total Revenue :</td>
                        <td colSpan='3'>
                            {itemsSold.reduce((acc, p)=>{
                                return (acc+p.price)
                            },0)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </React.Fragment>
    )
}


function Table(){

    const student = [
        {name:'Rishi',age:26,marks:60},
        {name:'Raj',age:30,marks:40},
        {name:'Anand',age:20,marks:85},
    ]

    return (
        <React.Fragment>
            <table border='1px' width='300px'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((e,index)=>{
                        return <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.marks}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}



function App(){
    let isBool = true;

    if(isBool){
        return <Table/>
    }
   return <Products/>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)