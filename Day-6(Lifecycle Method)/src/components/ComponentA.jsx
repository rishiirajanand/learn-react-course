import { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component
{
    constructor()
    {
        super()
        this.state = {
            name : "Component A",
            data : []
        }
        console.log('ComponentA Constructor');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>  this.setState({data}))
        .catch(err => console.log("Error" + err))  
    }

    static getDerivedStateFromProps(){
        console.log('ComponentA DerivedState');
        return null;
    }
    
    render()
    {
        const {data} = this.state;
        console.log(this.state.data);
        return (
            <>
                <h1>Component didMount A</h1>
                <ul>
                    {data.map( data => <li key={data.id}>{data.name}</li> )}
                </ul>
                
            </>
        )
    }
}