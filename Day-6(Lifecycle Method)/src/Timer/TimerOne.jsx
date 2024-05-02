import { Component } from "react";

export default class TimerOne extends Component
{

    constructor()
    {
        super()
        this.state = {
            timer : 0
        }
        this.timerId = null;
        console.log('TimerOne Constructor');
    }

    static getDerivedStateFromProps(){
        console.log('TimerOne getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    render()
    {
        console.log('TimerOne render');
        return (
            <>
                <span>Timer : </span>
                <span>{new Date(this.state.timer*1000).toISOString().slice(11,19)}</span>
            </>
        )
    }

    componentDidMount(){
        console.log('TimerOne componentDidMount');

        this.timerId = setInterval(()=>{

            this.setState(prevState => ({timer : prevState.timer+1}))

        },1000)

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('TimerOne getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('TimerOne componentDidUpdate');
        console.log('----------------------------');
        if(this.state.timer === 10){
            clearInterval(this.timerId)
        }
    }

    componentWillUnmount(){
        console.log('TimerOne componentWillUnmount');
    }
}