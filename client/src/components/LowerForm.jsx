import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import style from './style.css'

const LowerForm = ({agents}) => {
  return (
  <div className={style["form-inner-lower-container"]}> 
    {agents.map((agent, idx) => {
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
  )
}

export default LowerForm



// const LowerForm = ({agents}) => {
//   console.log(agents)
//   return (<div>
//     {agents.length ? 
//     (
//       <div className={style["form-inner-lower-container"]}> 
//       {agents.map((agent, idx) => {
//         return (<div key={agent._id}
//           className={style["form-agent-container"]} 
//           id={style["form-agent-container-"+idx]}>
//         <span>
//           <img src={agent.agent_photo} 
//           className={style["form-agent-image"]} 
//           id={style["form-agent-image-"+idx]}/>
//         </span>
//         <span className={style["form-agent-name"]}
//           id={style["form-agent-name-"+idx]}>
//           {agent.agent_name}
//         </span> 
//         <span id={style["form-agent-stars-"+idx]}>
//           <StarRatingComponent 
//             className={style["form-agent-stars"]}
//             name="rate1" 
//             starCount={5}
//             starColor={"#3dca59"}
//             emptyStarColor={"white"}
//             value={agent.average_stars}/>
//         </span>
//         <span className={style["form-agent-ratings"]}
//           id={style["form-agent-ratings-"+idx]}>
//           ({agent.num_ratings})
//         </span>
//         <span className={style["form-agent-sales"]}
//           id={style["form-agent-sales-"+idx]}>
//           {agent.recent_sales} 
//           <p className={style["form-agent-sales-p"]}> 
//             Recent Sales
//           </p>
//         </span>
//         <span className={style["form-agent-phone"]}
//           id={style["form-agent-phone-"+idx]}>
//           {agent.phone}
//         </span>
//         <span className={style["form-agent-type"]} 
//           id={style["form-agent-type-"+idx]}>
//           {agent.agent_type.toUpperCase()+" AGENT"}
//         </span>
//       </div>) 
//     })}
//     <p className={style["form-inner-lower-container-p"]}>
//       Learn how to appear as the agent above
//     </p>
//     </div>
//   ) : (
//     <div></div>
//   )}
//   </div>)
// }