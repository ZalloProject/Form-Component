import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/Index'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<div>
      <Index />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById("form-service"));