import React from "react";

function EventsFunctional() {
    function clickHandler() {
        console.log("Clicked the function button")
    }

  return (
    <div>
      <button onClick={clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventsFunctional
