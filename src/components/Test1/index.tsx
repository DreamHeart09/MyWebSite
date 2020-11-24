import React from "react";

import { TimePicker, Switch } from "@alifd/next";

import "./index.css";

class Test1 extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div>
        <TimePicker />
        <Switch checkedChildren="开" unCheckedChildren="关" />
      </div>
    );
  }
}

export default Test1;
