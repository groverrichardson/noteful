import React from "react";
import "../FolderList/FolderList.css";
import NotesContext from "../NotesContext";
import Folder from "../Folder/Folder";

class FolderList extends React.Component {
    render() {
        return (
            <NotesContext.Consumer>
                {context => {
                    return (
                        <div className="folder-container">
                            {context.store.folders.map((folder, i) => (
                                <Folder
                                    {...this.props}
                                    key={i}
                                    name={folder.name}
                                    folderId={folder.id}
                                    currentNote={this.props.currentNote}
                                />
                            ))}
                        </div>
                    );
                }}
            </NotesContext.Consumer>
        );
    }
}

export default FolderList;
