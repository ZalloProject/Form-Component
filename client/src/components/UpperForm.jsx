import React from 'react'
import style from './style.css'

const UpperForm = () => {
  return(
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
          
      </div>
    )
}

export default UpperForm