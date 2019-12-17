import React from "react";

const Contact = (props) => {

    // const contactList = (data) => {
        
    //     return 
    //     })
    // }

    return (
        <section id="contact">
            <h2>Contact Details</h2>
            {props.data.map(
                            (item) => {
                                    return (
                                            <p>
                                                <b>{item.platform}:</b> <i>{item.value}</i>
                                            </p>
                                            )
                                    }
                            )
            }
        </section>
    )

}

export default Contact