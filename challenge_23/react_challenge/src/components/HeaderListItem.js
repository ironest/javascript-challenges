import React from "react";

const HeaderListItem = (props) => {

    return (
        <li>
            <a href="`${props.href}`">
                {props.text}
            </a>
        </li>
    )
}

export default HeaderListItem