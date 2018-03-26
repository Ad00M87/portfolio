import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';

class Skill extends React.Component {
  state = {
    size: "small"
  }

  render() {
    const { lang } = this.props;
    let { size } = this.state;
    return(
      <Segment
        basic
        onMouseEnter={() => this.setState({ size: "medium"})}
        onMouseLeave={() => this.setState({ size: "small"})}
        textAlign="center"
      >
        <Image src={lang.image} size={this.state.size} />
        { size === "medium" && <Header as="h1">{lang.name}</Header>}
      </Segment>
    )
  }
}

export default Skill;
