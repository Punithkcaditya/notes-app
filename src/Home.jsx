import { useState, React } from "react";

export default function Dashboard() {
  const initialNotes = {
    id: "",
    title: "",
    body: "",
  };
  const [notes, setNotes] = useState([
    { id: 1, title: "title", body: "lorem" },
    { id: 2, title: "title", body: "lorem" },
    { id: 3, title: "title", body: "lorem" },
    { id: 4, title: "title", body: "lorem" },
    { id: 56, title: "title", body: "lorem" },
  ]);

  const [note, setNote] = useState(initialNotes);
  const changeState = () => {
    const reg = { id: 6, title: "title6", body: "lorem ipsum" };
    //notes.push()
    setNotes(notes.concat(reg));
  };

  const addNote = (e) => {
    e.preventDefault();
    if (note.title === "" || note.body === "") {
      return;
    }
    setNotes([
      ...notes,
      {
        ...note,
        id: Math.max(...notes.map((note) => note.id)) + 1,
      },
    ]);
  };
  return (
    <>
      <pre>{JSON.stringify(notes)}</pre>

      <ul>
        {notes.map((note) => {
          return (
            <li>
              id : {note.id}, title: {note.title}, body: {note.body}
            </li>
          );
        })}
      </ul>
      <button onClick={() => changeState()}>change</button>
      <br></br>

      <form onSubmit={(e) => addNote(e)}>
        <label htmlFor="">
          Title
          <input
            type="text"
            onChange={(ev) => setNote({ ...note, title: ev.target.value })}
          />
        </label>
        <label htmlFor="">
          Body
          <input
            type="text"
            onChange={(ev) => setNote({ ...note, body: ev.target.value })}
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}
