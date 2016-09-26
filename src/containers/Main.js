import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

if (!global.__SERVER__ && !global.__TEST__) {
  require('../styles/main.scss');
}

class Main extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    pageEndpoint: PropTypes.string,
    theme: PropTypes.string,
    currentUserUid: PropTypes.string,
    currentUserProvider: PropTypes.string,
    currentUserEndpoint: PropTypes.string,
  };

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default connect(({ auth, demoUi }) => ({
  currentUserUid: auth.getIn(['user', 'attributes', 'provider']) || 'none',
  currentUserProvider: auth.getIn(['user', 'attributes', 'uid']) || 'none',
  currentUserEndpoint: auth.getIn(['user', 'endpointKey']) || 'none',
  theme: demoUi.get('theme'),
  pageEndpoint: demoUi.get('endpoint'),
}))(Main);
