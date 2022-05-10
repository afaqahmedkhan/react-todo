import React from "react";
import { useSelector } from "react-redux";
import { getAllNotes } from "../../features/notes/noteSlice";
import Note from "../Note/Note";
function NoteListing() {

    const notes = useSelector(getAllNotes);
    let renderNotes = "";
    renderNotes = notes.notes.map((note, index)=> {
      return <Note key={index} data={note}/>;
    });
    return (
      <div className="NoteListing">
        {renderNotes}
      </div>
    );
  }
  
  export default NoteListing;
  