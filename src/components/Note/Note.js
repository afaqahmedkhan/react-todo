import React from "react";
import { useDispatch } from "react-redux";
import './Note.css';
import { removeNote } from "./../../features/notes/noteSlice"

const Note = ({data, key}) => {

    const dispatch = useDispatch();

    const remove = () => {
      dispatch(removeNote(data));
    }

    return (
      <div className="note">
        {data}
        <button onClick={remove}>x</button>
      </div>
    );
  }
  
  export default Note;
  