import React from "react";


export default function Nav () {
    return(
        <div className="d-flex justify-content-end">
            <ul className="p-3 navbar-nav text-center bg-black rounded-pill text-light">
                <li className="nav-item active link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    <a class="fs-3 bi bi-house nav-link " href="#"></a>
                </li>
                <li className="nav-item link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    <a className="fs-3 bi bi-mortarboard nav-link" href="#"></a>
                </li>
                <li className="nav-item link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    <a className="fs-3 bi bi-laptop nav-link" href="#"></a>
                </li>
                <li className="nav-item link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    <a className="fs-3 bi bi-send nav-link" href="#"></a>
                </li>
            </ul>
        </div>
    );
}