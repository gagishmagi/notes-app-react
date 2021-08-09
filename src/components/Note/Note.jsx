import noteImg from '../../images/note.png'

function Note({note, removeNote}){
    return  (
        <div style={myNoteStyle} className="note">
            <button style={myNoteStyle.button} onClick={() => removeNote(note.noteId)}>X</button>
            <p style={myNoteStyle.para}>{note.text}</p>
            <p style={myNoteStyle.para}>{note.date}</p>
            <p style={myNoteStyle.para}>{note.time}</p>
        </div>
     )
}

let myNoteStyle ={
    width: "283px",
    height: "283px",
    backgroundImage: `url(${noteImg})`,
    button: {
        marginTop: "30px"
    },
    para: {
        textAlign:"center"
    }
}

export default Note