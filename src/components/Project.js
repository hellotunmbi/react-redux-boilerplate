import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../redux/actions/projectActions";

class ReceiveBitcoin extends Component {
  state = {
    id: "",
    title: ""
  };

  handleClick = e => {
    e.preventDefault();
    // this.setState({ id: 4, title: "My title from receive" });
    this.props.createProject({ id: 4, title: "My title from receive" });
  };

  render() {
    console.log("Props", this.props);
    const projects = this.props.projects;
    return (
      <div>
        <h3>Receive Bitcoin</h3>
        <button onClick={this.handleClick}>Click Me</button>
        <ul>
          {projects &&
            projects.map(project => (
              <li>
                {project.id} - {project.title}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveBitcoin);
