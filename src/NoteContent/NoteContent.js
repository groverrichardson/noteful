import React from "react";
import NotesContext from "../NotesContext";

class Content extends React.Component {
    //findNoteContent should map through notes and match to currentNote and returns note content.
    render() {
        return (
            <NotesContext.Consumer>
                {context => <div>{context.displayContent()}</div>}
            </NotesContext.Consumer>
        );
    }
}

export default Content;
