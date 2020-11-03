import React, {useContext} from "react";
import './Comments.css';
import Context from '../Context';

function Comments(props) {
  const { removeComment } = useContext(Context);
  return (
    <li>
      <p>{props.data.name}</p>
      <p>{22}</p>
      <p>{props.data.comments}</p>
      <button onClick={()=>removeComment(props.data.id)}>Удалить</button>
    </li>
  );
}

export default Comments;
