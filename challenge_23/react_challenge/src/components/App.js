import React from "react"
import Header from "./Header"
import AboutMe from "./AboutMe"
import FavFood from "./FavFood"
import Contact from "./Contact"
import Footer from "./Footer"


const App = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <FavFood />
            <Contact data = {[
                {platform: "Phone", value: "+12345678"},
                {platform: "Email", value: "thatsme@test.com"},
                {platform: "Twitter", value: "#superfun"}
            ]}
            />
            <Footer />
        </>
    )
}

export default App;