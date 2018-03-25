import React from 'react';
import { connect } from 'react-redux';

class Project extends React.Component {

  render() {
    let { project: media } = this.props;
    let movie = media[1];
    return(
      <div>
        {this.props.project.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { project: state.project }
}

export default connect(mapStateToProps)(Project);
