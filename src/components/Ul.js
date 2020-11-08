import React from "react";

function Ul(props) {
  if (props.state[0] !== undefined){
    return (
      <ul>
        {props.state.map((li, index) => {
          return (
            <li key={index}>
              <div>
                <h2 className="name">{li.name}</h2>
                <p className="date">{li.date}</p>
              </div>
              <p className="comments">{li.comments}</p>
              <button onClick={props.remove}>Удалить</button>
            </li>
          );
        })}
      </ul>
    );
  }else{
    return <p>Нет новых комментариев</p>
  }
}

export default Ul;
