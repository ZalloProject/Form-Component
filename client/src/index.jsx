import React from 'react'
import ReactDOM from 'react-dom'
import UpperForm from '../src/components/UpperForm.jsx'
import LowerForm from '../src/components/LowerForm.jsx'
import style from './components/style.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      agents: [],
    }
  }

  componentWillMount() { 
    fetch('http://zallo-agents-server.us-west-2.elasticbeanstalk.com/agents', {
      method: "GET",
    })
    .then(res => res.json())
    .then((agentData) => {
      this.setState({
        agents: agentData
      })
    })
    .catch(e => console.log(e))
  };

  render(){
    return(
      <div className={style['form-outer-container']}>
        <div className={style['form-inner-container']}>
        <header className={style['form-header-container']}>
          CONTACT AGENT
        </header>
          <UpperForm />
          <LowerForm agents={this.state.agents} />
        </div>
      </div>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById('form-service'))