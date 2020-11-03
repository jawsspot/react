import React, {useState} from 'react'
import Comments from './Comments'
import './CommentList.css'


function CommentList(props){
    return (
      <ul>
        {props.comments.map((li) => {
          return <Comments data={li} key={li.id} />;
        })}
      </ul>
    );
}


export default CommentList;


