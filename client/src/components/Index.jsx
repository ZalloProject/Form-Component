import React from 'react'
import UpperForm from './UpperForm.jsx'
import LowerForm from './LowerForm.jsx'
import style from './components/style.css'

class Index extends React.Component {
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
      <div className={style.formOuterContainer}>
        <div className={style.formInnerContainer}>
        <header className={style.formHeaderContainer}>
          CONTACT AGENT
        </header>
          <UpperForm />
          <LowerForm agents={this.state.agents} />
        </div>
      </div>
    ) 
  }
}

export default Index
