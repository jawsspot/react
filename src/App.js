import './App.css';
import React from 'react';
import CommentList from "./components/CommentList";
import Context from './Context'
import AddComments from "./components/AddComments";

function App () {
  const [comments, setComments] = React.useState([
    { id: 1, name: "вася", comments: "sdsfdsf" },
    { id: 2, name: "вася", comments: "sdsfdsf" },
  ]);
  
  function removeComment(id){
    setComments(comments.filter((comments) => comments.id !== id));
  }
  function addCommentaries(name, comments) {
    console.log(comments)
    setComments(
     comments.push([{
       name,
       comments,
      date: new Date().toLocaleTimeString(),
      id: Date.now(),
      
    }])
    );
  }

  return (
    <Context.Provider value={{ removeComment }}>
      <div className="container">
        {comments.length ? (
          <CommentList comments={setComments} />
        ) : (
          <p>Нет коментариев</p>
        )}
        <AddComments onCreate={addCommentaries} />
      </div>
    </Context.Provider>
  );


}

export default App;
