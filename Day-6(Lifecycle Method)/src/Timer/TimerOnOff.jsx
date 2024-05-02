import { Component } from "react";

export default class TimerOnOff extends Component
{

    constructor()
    {
        super();

        this.state = {
            timer : 0
        }

        this.timerId = null;
    }

    componentDidUpdate(prevProps, preState, snapShot){
        // console.log(prevProps,preState , snapShot);
        
        if(prevProps.timerOn != this.props.timerOn){
            if(this.props.timerOn){
                this.timerId = setInterval(()=>{
                    this.setState(preState => (
                        {timer : preState.timer+1}
                    ))
                }, 1000)
            }
            else{
            
                clearInterval(this.timerId)
            }
        }

        // console.log(prevProps, this.props);
        
        
    }

    render()
    {
        return (
            <>
                <span style={{fontSize: '24px'}}>Timer : </span>
                {
                    new Date(this.state.timer*1000).toISOString().slice(11,19)
                }
            </>
        )
    }
}