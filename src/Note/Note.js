import React from "react";

class Note extends React.Component {
    navigate = (folderId, noteId) => {
        this.props.history.push(`/folder/${folderId}/note/${noteId}`);
    };
    render() {
        return (
            <div>
                <section className="note-preview">
                    <h3
                        onClick={() => {
                            this.navigate(
                                this.props.folderId,
                                this.props.noteId
                            );
                            this.props.selectNote(this.props.noteId);
                            this.props.displayContent();
                        }}
                    >
                        {this.props.name}
                    </h3>
                    <span className="note-options">
                        <p>Date Modified: {this.props.modified}</p>
                        <button className="delete-button">Delete</button>
                    </span>
                </section>
            </div>
        );
    }
}

export default Note;
