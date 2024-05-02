import ComponentA from './components/ComponentA'
import TimerOne from './Timer/TimerOne'
import React from 'react'

import TimerOnOff from './Timer/TimerOnOff'

class App extends React.Component {
  
  constructor()
  {
    super()
    this.state = {
      mount : false,
      timerOn : false
    }
  }

  handleMount = ()=>{
    this.setState((prevState) => ({mount : !this.state.mount}))
  }
  handleTimer = ()=>{
    this.setState({timerOn : !this.state.timerOn})
  }

  render()
  {
    return (
      <>
      
        {/* < ComponentA />
        <button onClick={this.handleMount}>
          {this.state.mount ? 'UN-MOUNT' : 'MOUNT'}
        </button>

        {
          this.state.mount ? < TimerOne /> : null
        } */}

        < TimerOnOff  timerOn = {this.state.timerOn}/>
        <br />
        <button onClick={this.handleTimer}>
          {this.state.timerOn ? 'STOP' : 'START'}
        </button>



      </>
    )
  }
}

export default App
