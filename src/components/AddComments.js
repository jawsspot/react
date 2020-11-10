import React from "react";


function AddComments(props) {
  
//  if (props.state.newNameUser === "" || props.state.newComments === ""){
//    return (
//      <form
//        onSubmit={(e) => {
//          e.preventDefault();
//          if (props.state.newNameUser !== "" && props.state.newComments !== "")
//            props.addComment(e);
//        }}
//      >
//        <input
//          type="text"
//          value={props.state.newNameUser}
//          placeholder="Имя"
//          onChange={props.setStateNameUser}
//          required
//        ></input>
//        <input
//          type="text"
//          name="comments"
//          placeholder="Ваш коментарий"
//          value={props.state.newComments}
//          onChange={props.setStateComments}
//          required
//        ></input>
//        <button type="submit">Отправить</button>
//        <p>Введите ваше имя и коментарий</p>
//      </form>
//    );
//  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (props.state.newNameUser !== "" && props.state.newComments !== "") {
          props.addComment(e);
        } else if (
          props.state.newNameUser === "" ||
          props.state.newComments === ""
        ) {
          props.validation();
        }
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
      <p className="validate">{props.state.validate}</p>
      <button type="submit">Отправить</button>
    </form>
  );
}
export default AddComments;
