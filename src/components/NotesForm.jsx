
function NotesForm({handleUpdateState, addNote }) {

    return (
        <div className="form">
            <textarea onChange={handleUpdateState} id="text" cols="30" rows="10"></textarea>
            <input onChange={handleUpdateState}  type="date" id="date" />
            <input onChange={handleUpdateState}  type="time" id="time" />
            <button onClick={addNote}>Add note</button>
        </div>
    )
}


export default NotesForm