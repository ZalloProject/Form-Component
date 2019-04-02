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
    $.get('http://localhost:3001/agents')
    .then((agentData)=>{
      let parsedAgentData = JSON.parse(agentData)
      this.setState({
        agents: parsedAgentData 
      })
    })
  }

  render() { 
    return(<div className={style['form-outer-container']}>
      <div className={style['form-inner-container']}>
        <header className={style['form-header-container']}>
          CONTACT AGENT
        </header>
        <div className={style['form-inner-upper-container']}>
          <form>
            <label>
              <input type="text" 
              name="name" 
              placeholder="Your Name" 
              className={style['form-input-name']}
              />
            </label>
            <br />
            <label>
              <input type="text" 
              name="tel" 
              placeholder="Phone" 
              className={style['form-input-tel']}
              />
            </label>
            <br />
            <label>
              <input type="text" 
              name="email" 
              placeholder="Email" 
              className={style["form-input-email"]}
              />
            </label>
            <br/>
            <label>
              <input type="text" 
              name="interested-in" 
              placeholder='I am interested in 1225 E. Moreland St.'
              className={style["form-input-interest"]}
              />
            </label>
            <br />
            <input type="submit" 
            value="Contact Agent" 
            className={style["form-contact-button"]}/>
            <br />
            <label className={style["form-label-checkbox"]}>
              <input name="finance-info" 
              type="checkbox"
              /> 
              I want financing information.
            </label>
          </form>
          <div className={style["form-container-p"]}>
            <p>By pressing Contact Agent, you agree that Zallo Group and real estate professionals 
              may call/text you about your inquiry, which may involve use of automated means and 
              prerecorded/artificial voices. You don't need to consent as a condition of buying any 
              property, goods or services. Message/data rates may apply. You also agree to our <br/> 
              <span className={style["form-terms"]}> 
                Terms of Use. 
              </span> 
              Zallo does not endorse any real estate professionals.
            </p>
          </div>
          <div className={style["form-inner-lower-container"]}> {/** Agents will be loaded below this line */}
            {this.state.agents.map((agent, idx) => {
            return (
              <div key={agent._id} 
              className={style["form-agent-container"]} 
              id={style["form-agent-container-"+idx]}>
                <span>
                  <img src={agent.agent_photo} 
                  className={style["form-agent-image"]} 
                  id={style["form-agent-image-"+idx]}/>
                </span>
                <span className={style["form-agent-name"]}
                  id={style["form-agent-name-"+idx]}>
                  {agent.agent_name}
                </span> 
                <span id={style["form-agent-stars-"+idx]}>
                  <StarRatingComponent 
                    className={style["form-agent-stars"]}
                    name="rate1" 
                    starCount={5}
                    starColor={"#3dca59"}
                    emptyStarColor={"white"}
                    value={agent.average_stars}/>
                </span>
                <span className={style["form-agent-ratings"]}
                  id={style["form-agent-ratings-"+idx]}>
                  ({agent.num_ratings})
                </span>
                <span className={style["form-agent-sales"]}
                  id={style["form-agent-sales-"+idx]}>
                  {agent.recent_sales} 
                  <p className={style["form-agent-sales-p"]}> 
                    Recent Sales
                  </p>
                </span>
                <span className={style["form-agent-phone"]}
                  id={style["form-agent-phone-"+idx]}>
                  {agent.phone}
                </span>
                <span className={style["form-agent-type"]} 
                  id={style["form-agent-type-"+idx]}>
                  {agent.agent_type.toUpperCase()+" AGENT"}
                </span>
              </div>
              ) 
            })}
            <p className={style["form-inner-lower-container-p"]}>
              Learn how to appear as the agent above
            </p>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Form