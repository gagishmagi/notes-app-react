function Note({note, removeNote}){
    return  (
        <div className="note">
            <button onClick={() => removeNote(note.noteId)}>X</button>
            <p>{note.text}</p>
            <p>{note.date}</p>
            <p>{note.time}</p>
        </div>
     )
}


export default Note