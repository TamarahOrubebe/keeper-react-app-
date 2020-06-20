import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
const [note, setNote] = useState(
  {title: "",
  content: ""});

  const [isExpanded, setIsExpanded] = useState(false)

  function handleChange(event) {
    const {name, value} = event.target
    setNote(prevValue => ({...prevValue, [name]: value}) )
   
  } 

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} /> }
        <textarea onChange={handleChange} onClick={expand}
          value={note.content} name="content" placeholder="Take a note..."
          rows={isExpanded ? 3 : 1} />
          <Zoom in={isExpanded}>
            <Fab onClick={(event) => {
              props.onAdd(note);
              setNote({
                title: "",
                content: ""
                })
                event.preventDefault();
              }}>
              <NoteAddIcon /> 
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
