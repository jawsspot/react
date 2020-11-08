import React from "react";

function AddComments(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (props.state.newNameUser !== "" && props.state.newComments !== "")
          props.addComment(e);
      }}
    >
      <input
        type="text"
        value={props.state.newNameUser}
        placeholder="Имя"
        onChange={props.setStateNameUser}
      ></input>
      <input
        type="text"
        name="comments"
        placeholder="Ваш коментарий"
        value={props.state.newComments}
        onChange={props.setStateComments}
      ></input>
      <button type="submit">Отправить</button>
    </form>
  );
}
export default AddComments;
