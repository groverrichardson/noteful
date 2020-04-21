import React from "react";
import "../Noteful/Noteful.js";
import "./Noteful.css";
import { Link, Switch, Route } from "react-router-dom";
import Files from "../dummy-store";
import NotesContext from "../NotesContext";
import HomePage from "../HomePage/HomePage.js";
// import NoteContent from "../NoteContent/NoteContent";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentNote: [],
            currentFolder: Files.folders,
            isNoteSelected: false,
            folders: [],
            notes: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch("http://localhost:9090/folders"),
            fetch("http://localhost:9090/notes")
        ])
            .then(([folderRes, notesRes]) => {
                if (!folderRes.ok) {
                    return folderRes.json().then(e => Promise.reject(e));
                }

                if (!notesRes.ok) {
                    return notesRes.json().then(e => Promise.reject(e));
                }

                return Promise.all([folderRes.json(), notesRes.json()]);
            })
            .then(data => {
                this.setState({
                    folders: data[0],
                    notes: data[1]
                });
            });
    }

    selectNote = id => {
        // eslint-disable-next-line
        const newState = this.state.notes.filter(note => {
            if (id === note.id) {
                return note;
            }
        });
        this.setState({
            currentNote: newState,
            isNoteSelected: true
        });
    };

    selectFolder = id => {
        // eslint-disable-next-line
        const selectedFolder = this.state.folders.filter(folder => {
            if (id === folder.id) {
                return folder;
            }
        });
        // eslint-disable-next-line
        const newState = Files.notes.filter((note, i) => {
            if (note.folderId === selectedFolder[0].id) {
                return note;
            }
        });
        this.setState({
            currentNote: newState,
            currentFolder: selectedFolder[0].id
        });
    };

    addNote() {
        //Placeholder
    }

    addFolder() {
        //Update
    }

    displayContent = () => {
        if (this.state.isNoteSelected) {
            return (
                <div>
                    <p>Dipslay note content</p>
                </div>
            );
        }
    };

    displayAddFolderOptions = () => {
        // update
    };

    render() {
        return (
            <div className="App">
                <Link to={"/"}>Noteful</Link>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <NotesContext.Provider
                                value={{
                                    store: this.state,
                                    isNoteSelected: this.state.isNoteSelected,
                                    selectFolder: this.selectFolder,
                                    selectNote: this.selectNote,
                                    currentNote: this.currentNote,
                                    displayContent: this.displayContent
                                }}
                            >
                                <HomePage
                                    {...props}
                                    selectFolder={this.selectFolder}
                                    selectNote={this.selectNote}
                                    isNoteSelected={this.state.isNoteSelected}
                                    displayContent={this.displayContent}
                                />
                            </NotesContext.Provider>
                        )}
                    />
                    )} />
                    <Route
                        path="/folder/:id"
                        render={props => (
                            <NotesContext.Provider
                                value={{
                                    store: this.state,
                                    isNoteSelected: this.state.isNoteSelected,
                                    selectFolder: this.selectFolder,
                                    selectNote: this.selectNote,
                                    currentNote: this.currentNote,
                                    displayContent: this.displayContent
                                }}
                            >
                                <HomePage
                                    {...props}
                                    selectFolder={this.selectFolder}
                                    selectNote={this.selectNote}
                                    isNoteSelected={this.state.isNoteSelected}
                                    displayContent={this.displayContent}
                                />
                            </NotesContext.Provider>
                        )}
                    />
                    <Route
                        path="/folder/:id/note/noteId:"
                        render={props => (
                            <NotesContext.Provider
                                value={{
                                    store: this.state,
                                    isNoteSelected: this.state.isNoteSelected,
                                    selectFolder: this.selectFolder,
                                    selectNote: this.selectNote,
                                    currentNote: this.currentNote,
                                    displayContent: this.displayContent
                                }}
                            >
                                <HomePage
                                    {...props}
                                    selectFolder={this.selectFolder}
                                    selectNote={this.selectNote}
                                    displayContent={this.displayContent}
                                />
                            </NotesContext.Provider>
                        )}
                    />
                    )} />
                </Switch>
            </div>
        );
    }
}

export default App;
