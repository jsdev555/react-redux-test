import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className="wrapper">
        <Grid className="content">
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default Container;
