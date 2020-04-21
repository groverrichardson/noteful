import React from "react";
import FolderList from "../FolderList/FolderList";
import "./Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <FolderList {...props} />
            <form>
                <input
                    className="add-folder-form"
                    placeholder="Name of new folder"
                    type="text"
                ></input>
                <button className="add-folder">Add Folder</button>
            </form>
            <form>
                <input
                    className="add-note-form"
                    placeholder="Name of new note"
                    type="text"
                ></input>
                <button className="add-note">Add Note</button>
            </form>
        </div>
    );
}

export default Sidebar;
