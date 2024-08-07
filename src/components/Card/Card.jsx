import React from "react";
import Available from "./Available/Available";

export default function Card () {
    return(
        <div className="p-5 row bg-white rounded-4 shadow">
            <div className="col">
                <h1>Ashanty Sierra</h1>
                <u className="mt-5 text-muted">Web Developer</u>
                <Available></Available>
            </div>
            <div className="col">
                <p>Hello! I'm Matt, an Expert Motion Design Specialist bringing ideas to life with innovation, creativity, and precision.</p>
                <button className="btn btn-dark rounded-pill me-3">WORK</button>
                <button className="btn btn-outline-secondary rounded-pill">CV/DOWNLOAD</button>
            </div>
        </div>
    );
}