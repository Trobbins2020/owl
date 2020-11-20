import React from "react";
import Participant from "./Participant";
import Participants from "../Data/Participants";
import ChatEvents from "../Data/ChatEvents";

class Chats extends React.Component {
  render() {
    return (
      <div>
        <h1>Chat Events</h1>
        {Participants.map((y) => {
          return ChatEvents.map((x) => {
            if (x.participantId === y.id) {
              return (
                <Participant
                  key={x.timestamp + x.type}
                  name={y.name}
                  avatar={y.avatar}
                  timestamp={x.timestamp}
                />
              );
            } else {
              return console.log("Temp");
            }
          });
        })}
      </div>
    );
  }
}
export default Chats;
