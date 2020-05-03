import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../redux/actions/projectActions";

class Homepage extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    const projects = this.props.projects;

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <input
                  id="content"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            <ul>
              {projects &&
                projects.map((project) => (
                  <li key={project.title}>
                    {project.title} - {project.content}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
