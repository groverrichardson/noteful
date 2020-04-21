import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import NoteList from "../NoteList/NoteList";
import "./HomePage.css";

function HomePage(props) {
    console.log(props);
    return (
        <div className="App">
            <div className="main">
                <Sidebar {...props} />
                <NoteList {...props} />
                {props.displayContent}
            </div>
        </div>
    );
}

export default HomePage;
