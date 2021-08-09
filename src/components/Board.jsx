import React from 'react'
import Note from './Note'
import NotesForm from './NotesForm'

class Board extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: [],
            note: {
                text: "",
                date: "",
                time: ""
            }
        }
    }



    handleUpdateState = (e) => {
        const newState = e.target.value
        const id = e.target.id
        const note = {...this.state.note}
        switch (id) {
            case 'text':
                note.text = newState
                this.setState({note})
                break;
            case 'date':
                note.date = newState
                this.setState({note})
                break;
            case 'time':
                note.time = newState
                this.setState({note})
                break;

            default:
                break;
        }

    }


    addNote = (e) =>{
        
        const myNotes = [...this.state.notes]
        const noteId = myNotes.length + 1 

        const note = {noteId, ...this.state.note }
        // console.log(note)
        myNotes.push(note)
        // console.log(myNotes)


        this.setState({notes: myNotes})
    }


    // Remove note by index
    // removeNote = (index) => {
    //     const newNotes = [...this.state.notes]

    //     newNotes.splice(index, 1)

    //     this.setState({notes: newNotes})
    // }

    // Remove note by value
    removeNote = (noteId) => {
        let newNotes = [...this.state.notes]
        newNotes = newNotes.filter((note) => note.noteId !== noteId)

        this.setState({notes: newNotes})
    }


    render(){
        console.log(this.state.notes)
        return (
            <div>
                
                <NotesForm handleUpdateState={this.handleUpdateState} addNote={this.addNote} />
                <div className="notes">
                    {this.state.notes.map((note, index)=>{
                       return  <Note key={index} note={note} removeNote={this.removeNote} />
                    })}
                   
                </div>

            </div>
            
        )
    }
}

export default Board