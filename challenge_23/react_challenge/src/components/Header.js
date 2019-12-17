import React from "react";
import HeaderListItem from "./HeaderListItem"

const Header = () => {

    return (
        <header>
            <h1>Welcome To Sandras Profile Page</h1>
            <nav>
                <ul>
                    <HeaderListItem href="#about-me" text="About Me" />
                    <HeaderListItem href="#fav-foods" text="Favourite Foods" />
                    <HeaderListItem href="#contact" text="Contact Details" />
                </ul>
            </nav>
        </header>
    )

}

export default Header