import React from "react";
import AboutMeListItem from "./AboutMeListItem"

const AboutMe = () => {

    return (
        <section id="about-me">
            <h2>About Me</h2>
            <img src="https://randomuser.me/api/portraits/women/8.jpg" />
            <article>
                <ol>
                    <AboutMeListItem
                        bold="Pop"
                        text="culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist."
                    />

                    <AboutMeListItem
                        bold="Friendly"
                        text="web maven. Bacon lover. General internet specialist. Incurable travel scholar."
                    />

                    <AboutMeListItem
                        bold="Subtly"
                        text="charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar."
                    />

                    <AboutMeListItem
                        bold="Unable"
                        text="to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."
                    />
                </ol>
            </article>
        </section>
    )

}

export default AboutMe