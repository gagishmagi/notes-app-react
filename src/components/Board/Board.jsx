import React from 'react'
import Note from '../Note/Note'
import NotesForm from '../NotesForm/NotesForm'

import boardImg from '../../images/background.jpg'

class Board extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: JSON.parse(localStorage.getItem("notes")) || [],
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

        localStorage.setItem("notes", JSON.stringify(myNotes))

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

        localStorage.setItem("notes", JSON.stringify(newNotes))

        this.setState({notes: newNotes})
    }


    render(){
        console.log(this.state.notes)
        return (
            <div style={myStyles}>
                
                <NotesForm handleUpdateState={this.handleUpdateState} addNote={this.addNote} />
                <div style={myStyles.flexStuff} className="notes">
                    {this.state.notes.map((note, index)=>{
                       return  <Note key={index} note={note} removeNote={this.removeNote} />
                    })}
                   
                </div>

            </div>
            
        )
    }
}

let myStyles = {
    width: "100%",
    minHeight: "1000px",
    backgroundImage: `url(${boardImg})`,
    flexStuff :{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }
}

export default Board