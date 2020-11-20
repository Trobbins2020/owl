import Participant from "./Participant";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

describe("Participant Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Participant
        name="Talon"
        avatar={
          "https://scontent.fluh1-1.fna.fbcdn.net/v/t1.0-9/123766917_1253575681683191_9154823593112041728_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=OC0rGzbwf0IAX-AzQ5-&_nc_ht=scontent.fluh1-1.fna&oh=bbce5c965d82cc5b7e45c04400d08724&oe=5FD73F0D"
        }
        timestamp={1548852484247}
        inSession={true}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<Participant />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
