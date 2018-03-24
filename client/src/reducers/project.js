const project = (state = {}, action) => {
  switch(action.type) {
    case "SET_CURRENT_PROJECT":
      return action.project;
    default:
      return state;
  }
}

export default project;
