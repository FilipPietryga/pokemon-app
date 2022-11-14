import { nanoid } from "@reduxjs/toolkit"
import Type from "./Type"

const Description = ({toggle=false, height="", weight="", candy="", egg="", weaknesses=[""], next_evolution=[{}]}) => {
  return ( 
    <div style={{fontSize:"0.5rem", position: "relative"}} className="">
      
      <div>
        <div>
          <span>Height: {height}ft. Weight: {weight}lbs.</span>
        </div>
        <div>
          <span>Eats:{candy}</span>
        </div>
        <div>
          Egg: {egg}
        </div>
        <div>
          Weaknesses: 
          {weaknesses.map((name) => {
            return <Type key={nanoid()} name={name}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Description