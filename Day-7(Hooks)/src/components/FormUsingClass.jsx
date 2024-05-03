import { Component } from "react";

export default class FormUsingClass extends Component
{

    constructor()
    {
        super()
        this.state = {
            fname : 'React',
            lname : 'Course'
        }
    }

    handleFirstName = (e)=>{
        this.setState({fname : e.target.value})
    }

    handleLastName = (e)=>{
        this.setState({lname : e.target.value})
    }

    componentDidMount()
    {
        document.title = this.state.fname + " " + this.state.lname
    }
    componentDidUpdate(){
        document.title = this.state.fname + " " + this.state.lname
    }
    render()
    {
        return (
            <>
                <div className="container">
                    <label htmlFor="fname">Enter Name</label>
                    <input type="text" name="fname" id="fname" 
                        value={this.state.fname}
                        onChange={this.handleFirstName}
                    />

                    <br /><br />
                    <label htmlFor="lname">Enter Last Name</label>
                    <input type="text" name="lname" id="lname" 
                        value={this.state.lname}
                        onChange={this.handleLastName}
                    />
                </div>
                <div className="res">
                    <span>{`Hii ${this.state.fname} ${this.state.lname}`}</span>
                </div>
            </>
        )
    }
}