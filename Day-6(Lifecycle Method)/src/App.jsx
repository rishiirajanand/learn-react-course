import ComponentA from './components/ComponentA'
import TimerOne from './Timer/TimerOne'
import React from 'react'

class App extends React.Component {
  
  constructor()
  {
    super()
    this.state = {
      mount : false
    }
  }

  handleMount = ()=>{
    
    this.setState((prevState) => ({mount : !this.state.mount}))
    
  }

  render()
  {
    return (
      <>
        {/* < ComponentA /> */}
        <button onClick={this.handleMount}>
          {this.state.mount ? 'UN-MOUNT' : 'MOUNT'}
        </button>

        {
          this.state.mount ? < TimerOne /> : null
        }
      </>
    )
  }
}

export default App
