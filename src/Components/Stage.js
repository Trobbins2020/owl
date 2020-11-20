import React from "react";
import Participant from "./Participant";
import Participants from "../Data/Participants";

class Stage extends React.Component {
  render() {
    return (
      <div>
        <h1>On Stage</h1>
        {Participants.map((item) => {
          if (item.onStage === true) {
            return (
              <Participant
                key={item.id}
                name={item.name}
                avatar={item.avatar}
              />
            );
          } else {
            return console.log("Temp");
          }
        })}
      </div>
    );
  }
}
export default Stage;
