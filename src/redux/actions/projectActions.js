export const createProject = (project) => {
  console.log("project", project);
  return (dispatch) => {
    //make async call
    dispatch({ type: "CREATE_PROJECT", payload: project });
  };
};
