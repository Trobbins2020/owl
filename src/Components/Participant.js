import React from "react";

class Participant extends React.Component {
  render() {
    return (
      <div className="Participant">
        <p>Name: {this.props.name}</p>
        <p> inSession: {this.props.inSession ? "True" : "False"}</p>
        <img src={this.props.avatar} alt={this.props.avatar} />
        <h2>
          {this.props.timestamp !== undefined
            ? new Date(this.props.timestamp).toLocaleTimeString()
            : ""}
        </h2>
      </div>
    );
  }
}
export default Participant;
