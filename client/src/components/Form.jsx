import React from 'react'
import $ from 'jquery'
import StarRatingComponent from 'react-star-rating-component';
import style from './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      agents: [],
    }
  }

  componentWillMount() { 
    $.get('/agents')
    .then((agentData)=>{
      let parsedAgentData = JSON.parse(agentData)
      this.setState({
        agents: parsedAgentData 
      })
    })
  }

  render() { 
    return(<div className="form-outer-container">
      <div className="form-inner-container">
        <header className="form-header-container">
          CONTACT AGENT
        </header>
        <div className="form-inner-upper-container">
          <form>
            <label>
              <input type="text" 
              name="name" 
              placeholder="Your Name" 
              className="form-input-name"
              />
            </label>
            <br />
            <label>
              <input type="text" 
              name="tel" 
              placeholder="Phone" 
              className="form-input-tel"
              />
            </label>
            <br />
            <label>
              <input type="text" 
              name="email" 
              placeholder="Email" 
              className="form-input-email"
              />
            </label>
            <br/>
            <label>
              <input type="text" 
              name="interested-in" 
              placeholder='I am interested in 1225 E. Moreland St.'
              className="form-input-interest"
              />
            </label>
            <br />
            <input type="submit" 
            value="Contact Agent" 
            className="form-contact-button"/>
            <br />
            <label className="form-label-checkbox">
              <input name="finance-info" 
              type="checkbox"
              /> 
              I want financing information.
            </label>
          </form>
          <div className="form-container-p">
            <p>By pressing Contact Agent, you agree that Zallo Group and real estate professionals 
              may call/text you about your inquiry, which may involve use of automated means and 
              prerecorded/artificial voices. You don't need to consent as a condition of buying any 
              property, goods or services. Message/data rates may apply. You also agree to our <br/> 
              <span className="form-terms"> 
                Terms of Use. 
              </span> 
              Zallo does not endorse any real estate professionals.
            </p>
          </div>
          <div className="form-inner-lower-container"> {/** Agents will be loaded below this line */}
            {this.state.agents.map((agent, idx) => {
            return (
              <div key={agent._id} 
              className="form-agent-container" 
              id={"form-agent-container-"+idx}>
                <span>
                  <img src={agent.agent_photo} 
                  className="form-agent-image" 
                  id={"form-agent-image-"+idx}/>
                </span>
                <span className="form-agent-name" 
                  id={"form-agent-name-"+idx}>
                  {agent.agent_name}
                </span> 
                <span id={"form-agent-stars-"+idx}>
                  <StarRatingComponent 
                    className="form-agent-stars" 
                    name="rate1" 
                    starCount={5}
                    starColor={"#3dca59"}
                    emptyStarColor={"white"}
                    value={agent.average_stars}/>
                </span>
                <span className="form-agent-ratings" 
                  id={"form-agent-ratings-"+idx}>
                  ({agent.num_ratings})
                </span>
                <span className="form-agent-sales" 
                  id={"form-agent-sales-"+idx}>
                  {agent.recent_sales} 
                  <p className="form-agent-sales-p"> 
                    Recent Sales
                  </p>
                </span>
                <span className="form-agent-phone" 
                  id={"form-agent-phone-"+idx}>
                  {agent.phone}
                </span>
                <span className="form-agent-type" 
                  id={"form-agent-type-"+idx}>
                  {agent.agent_type.toUpperCase()+" AGENT"}
                </span>
              </div>
              ) 
            })}
            <p className="form-inner-lower-container-p">
              Learn how to appear as the agent above
            </p>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Form