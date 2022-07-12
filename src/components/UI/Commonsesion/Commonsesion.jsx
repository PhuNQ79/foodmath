import React from "react";
import Container from "reactstrap";
import "./Commonsesion.css"
const Commonsesion = (props) => {
    return (  
        <section className="common__section">
            <Container>
                <h2 className="text-white">{props.title}</h2>
            </Container>
        </section>
    );
}
 
export default Commonsesion;