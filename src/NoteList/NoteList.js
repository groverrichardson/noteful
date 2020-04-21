import React from "react";
import "./NoteList.css";
import Note from "../Note/Note";
import NotesContext from "../NotesContext";

class NoteList extends React.Component {
    render() {
        return (
            <NotesContext.Consumer>
                {context => {
                    return (
                        <div className="notelist">
                            {context.store.currentNote.map((note, i) => (
                                <Note
                                    {...this.props}
                                    key={i}
                                    name={note.name}
                                    noteId={note.id}
                                    currentNote={this.props.currentNote}
                                    folderId={note.folderId}
                                    displayContent={context.displayContent}
                                />
                            ))}
                        </div>
                    );
                }}
            </NotesContext.Consumer>
        );
    }
}

export default NoteList;
