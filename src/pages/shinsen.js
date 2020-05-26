import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

const About = (props) => {
    return(
        <div>
            <Header content = 'hello' />
            <p>First division of Shinsen Gumi</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default About;