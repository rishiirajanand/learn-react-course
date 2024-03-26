
const student = [
    {name:'Rishi',age:26,marks:60},
    {name:'Raj',age:30,marks:40},
    {name:'Anand',age:20,marks:85},
]



function App(){

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

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)