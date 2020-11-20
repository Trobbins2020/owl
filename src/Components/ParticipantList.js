import React from "react";
import Participant from "./Participant";
import Participants from "../Data/Participants";

class ParticipantList extends React.Component {
  render() {
    return (
      <div>
        <h1>Participants</h1>
        {Participants.map((item) => {
          if (item.inSession === true) {
            return (
              <Participant
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                inSession={item.inSession}
              />
            );
          } else {
            return console.log("Temp");
          }
        })}
        {Participants.map((item) => {
          if (!item.inSession) {
            return (
              <Participant
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                inSession={item.inSession}
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
export default ParticipantList;
