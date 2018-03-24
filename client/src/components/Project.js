import React from 'react';
import { connect } from 'react-redux';

class Project extends React.Component {

  render() {
    return(
      <div>Hello</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { project: state.project }
}

export default connect(mapStateToProps)(Project);
