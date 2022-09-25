import React from "react";

class Projects extends React.Component {

    constructor(props) {
        super(props);
    }

    getData() {
        return this.props.projects.map((term) => {
            return (
                <div id="container" className="container p-5 text-center rounded-5 mb-3 text-light" style={{"backgroundColor": "black", "border": "solid #2A5757 20px"}}>
                    <p className="display-3" id="name">{term.name}</p>
                    <p style={{"fontSize": "18px"}} id="description">{term.description}</p>
                    <p>{term.optionalDesctiption}</p>
                    <a className="text-danger" style={{"fontSize": "14px"}} hidden={term.link=="/"} href={term.link}>{term.link}</a>
                </div>
            )
        })
    }

    render() {
        const projects = this.getData();
        return (
            <div id="container" className="container p-5 text-center">
                {projects}
            </div>
        )
    }
};

export default Projects;