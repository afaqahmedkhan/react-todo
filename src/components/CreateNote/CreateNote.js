import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addNotes } from '../../features/notes/noteSlice';

const CreateNote = () => {
    const [ note, setNoteValue ] = useState("");
    const dispatch = useDispatch();

    const createNote = () => {
      dispatch(addNotes(note));
      setNoteValue("");
    }

    const createNoteOnEnter = (e) => {
        if(e.key === 'Enter'){
          createNote();
        }
        
    }

    return (
      <div className="CreateNote">
        <input type="text" onKeyDown={createNoteOnEnter} value={note} onChange={(e) => setNoteValue(e.target.value)} />
        <button onClick={createNote}>
                Submit
        </button>
      </div>
    );
  }
  
  export default CreateNote;
  