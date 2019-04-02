import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../src/components/Form.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div><Form /></div>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById('form-service'))