import { projects } from '../components/ProjectInfo';

export const setCurrentProject = (id) => dispatch => {
  let project = projects.filter( p => p.id === id)
  dispatch({ type: "SET_CURRENT_PROJECT", project: project[0] })
}
