import Chats from "./Chat";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

describe("Chat Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Chats />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<Chats />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
