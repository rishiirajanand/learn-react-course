import { Component } from "react";

export default class ComponentB extends Component
{
    constructor()
    {
        super()
        this.state = {
            name : "Component B"
        }
        console.log('ComponentB Constructor');
    }

    componentDidMount(){
        console.log('ComponentB didMount');
    }

    static getDerivedStateFromProps(){
        console.log('ComponentB DerivedState');
        return null;
    }
    
    render()
    {
        console.log('ComponentB render');
        return (
            <>
                <h2>{this.state.name}</h2>
            </>
        )
    }
}