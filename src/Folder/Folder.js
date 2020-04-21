import React from "react";
import NotesContext from "../NotesContext";
import "./Folder.css";

class Folder extends React.Component {
    navigate = id => {
        this.props.history.push(`/folder/${id}`);
    };

    folderSelected = event => {};

    render() {
        return (
            <NotesContext.Consumer>
                {context => {
                    if (context.store.currentFolder === this.props.folderId) {
                        return (
                            <div
                                className="folder-container"
                                onClick={event => {
                                    context.selectFolder(this.props.folderId);
                                    this.navigate(this.props.folderId);
                                }}
                            >
                                <section className="folder">
                                    <h1 className="selected">
                                        {this.props.name}
                                    </h1>
                                </section>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                className="folder-container"
                                onClick={event => {
                                    context.selectFolder(this.props.folderId);
                                    this.navigate(this.props.folderId);
                                }}
                            >
                                <section className="folder">
                                    <h1>{this.props.name}</h1>
                                </section>
                            </div>
                        );
                    }
                }}
            </NotesContext.Consumer>
        );
    }
}

export default Folder;
