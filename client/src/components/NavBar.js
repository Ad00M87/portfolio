import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  // rightNavs = () => {
  //   const { user, dispatch, history } = this.props;
  //
  //   if (user.id) {
  //     return (
  //       <Menu.Menu position='right'>
  //         <Menu.Item
  //           name='Logout'
  //           onClick={() => dispatch(handleLogout(history))}
  //         />
  //       </Menu.Menu>
  //     );
  //   }
  //   return (
  //     <Menu.Menu position='right'>
  //       <Link to='/register'>
  //         <Menu.Item name='Register' />
  //       </Link>
  //       <Link to='/login'>
  //         <Menu.Item name='Login' />
  //       </Link>
  //     </Menu.Menu>
  //   );
  // }

  render() {
    return (
      <div>
        <Menu
          pointing
          secondary
          fixed='top'
          style={{
            backgroundColor: '#FFF',
          }}
        >
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/projects'>
            <Menu.Item name='projects' />
          </Link>
          <Link to='/skills'>
            <Menu.Item name='skills' />
          </Link>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
