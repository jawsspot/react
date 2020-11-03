import React, {useState} from "react";


function AddComments({ onCreate }) {
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');

  function submitHandler(e) {
    console.log(comments);
    console.log(name);
    e.preventDefault();
    if (comments && name) {
      onCreate(comments, name);
    }
  }

  return (
    <form className="addComments" onSubmit={submitHandler}>
      <input
        placeholder="Имя"
        value={name}
        onChange={(ev) => setName( ev.target.value)}
      ></input>
      <input
        placeholder="Комментраий"
        value={comments}
        onChange={(ev) => setComments(ev.target.value )}
      ></input>
      <button type="submit">Отправить</button>
    </form>
  );
}
export default AddComments;
