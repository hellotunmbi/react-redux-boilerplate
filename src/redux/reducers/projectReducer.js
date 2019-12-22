let initialState = {
  projects: [
    { title: "first", content: "My first post" },
    { title: "second", content: "My second post" },
    { title: "third", content: "My third post" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": {
      console.log("created project", action.payload);
    }
    default:
      return state;
  }
};

export default projectReducer;
