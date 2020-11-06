import React from "react";
import Ul from "./components/Ul";
import AddComments from "./components/AddComments";

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      newNameUser: "",
      newComments: "",
    };
  }

  addComment(e) {
    const list = this.state.list;
    list.push({
      name: this.state.newNameUser,
      comments: this.state.newComments,
      date: new Date().toLocaleTimeString(),
      id: Date.now(),
    });
    this.setState({ list });
    this.setState({ newNameUser: "", newComments: "" });
  }

  deleteComments(index) {
    const list = this.state.list;
    this.setState(list.splice(index, 1));
  }

  render() {
    return (
      <div>
        <AddComments
          state={this.state}
          addComment={() => this.addComment()}
          setStateComments={(e) => {
            this.setState({ newComments: e.target.value })
          }}
          setStateNameUser={(e) => {
            this.setState({ newNameUser: e.target.value })
          }}
        />

        <Ul state={this.state.list} remove={() => this.deleteComments()} />
      </div>
    );
  }
}

export default TodoApp;
