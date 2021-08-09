import './NotesForm.css'

function NotesForm({handleUpdateState, addNote }) {

    return (
        <div className="form" style={myFormStyles}>
            <textarea style={myFormStyles.input} onChange={handleUpdateState} id="text" cols="30" rows="10"></textarea>
            <input style={myFormStyles.input} onChange={handleUpdateState}  type="date" id="date" />
            <input style={myFormStyles.input} onChange={handleUpdateState}  type="time" id="time" />
            <button style={myFormStyles.input} onClick={addNote}>Add note</button>
        </div>
    )
}


let myFormStyles = {
    width: "500px",
    margin: "0 auto",
    textAlign: "center",
    input: {
        width: "250px",
        
    }
}


export default NotesForm