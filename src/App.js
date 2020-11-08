import React from "react";
import Ul from "./components/Ul";
import AddComments from "./components/AddComments";
import './App.css'

let commentsLoadState;

class NoteApp extends React.Component {
  constructor() {
    super();

      if (localStorage.getItem("comments") === null) {
        commentsLoadState = [];
      } else {
        let comments = localStorage.getItem("comments");
        comments = JSON.parse(comments);
        let arr = [];
        commentsLoadState = comments.map((item) => 
          arr.push(item)
        );
        commentsLoadState = arr;
      }

    this.state = {
      list: commentsLoadState,
      newNameUser: "",
      newComments: "",
    };
  }

  addComment(e) {
    const listAdd = this.state.list;
    const addCommentObj = {
      name: this.state.newNameUser,
      comments: this.state.newComments,
      date: new Date().toLocaleTimeString(),
      id: Date.now(),
    };

    listAdd.push(addCommentObj);
    let toLocalStor = JSON.stringify(listAdd);
    localStorage.setItem("comments", toLocalStor);

    this.setState({ list: listAdd });
    this.setState({ newNameUser: "", newComments: "" });
  }

  deleteComments(index) {
    const listAdd = this.state.list;
    listAdd.splice(index, 1);

    let toLocalStor = JSON.stringify(listAdd);
    localStorage.setItem("comments", toLocalStor);
    
    this.setState({ list: listAdd });
  }

  render() {
    return (
      <div className="container">
        <AddComments
          state={this.state}
          addComment={() => this.addComment()}
          setStateComments={(e) => {
            this.setState({ newComments: e.target.value });
          }}
          setStateNameUser={(e) => {
            this.setState({ newNameUser: e.target.value });
          }}
        />

        <Ul state={this.state.list} remove={() => this.deleteComments()} />
      </div>
    );
  }
}

export default NoteApp;
