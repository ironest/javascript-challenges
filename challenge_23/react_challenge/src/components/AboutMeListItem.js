import React from "react";

const AboutMeListItem = (props) => {

    return (
        <li>
            <p>
                <b>{props.bold}</b> {props.text}
            </p>
        </li>
    )
}

export default AboutMeListItem