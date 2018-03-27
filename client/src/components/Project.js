import React from 'react';
import { connect } from 'react-redux';
import CNDUM from '../images/CanDuu.mov';
import DPSM from '../images/DPS.mov';
import DFRM from '../images/DrFrank.mov';
import JKDM from '../images/JessieKDesign.mov';
import VOCM from '../images/Vocab.mov';
import WHNM from '../images/WhistleNative.mov';
import WHWM from '../images/WhistleWeb.mov';
import UNCST from '../images/Underconstruction.mov';
import { Header, Grid, Segment, Divider } from 'semantic-ui-react';

const videos = [ CNDUM, WHNM, DPSM, JKDM, DFRM, VOCM, WHWM, UNCST ]

class Project extends React.Component {

  render() {
    let { project } = this.props;
    return(
      <Grid style={styles.container}>
        <Divider hidden />
        <Grid.Row columns={2}>
          <Grid.Column width={10} style={styles.video}>
            <video style={{width: '900px', height: '600px'}} autoPlay loop muted>
              <source src={videos[project.movie]} type='video/mp4' />
            </video>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as='h1' textAlign="center">{project.name}</Header>
            <div style={{marginLeft: '50px', marginRight: '50px'}}>
              { project.bulletPoints.map( (b,i) => {
                return(
                  <Header as="h3">
                    {i+1}. {b}
                  </Header>
                )
              })}
            </div>
          </Grid.Column>
        </Grid.Row>
        { project.video &&
          <Grid.Row columns={2}>
            <Grid.Column width={10} style={styles.video}>
              <video style={{width: '900px', height: '600px'}} autoPlay loop muted>
                <source src={videos[project.video]} type='video/mp4' />
              </video>
            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
          </Grid.Row>
        }
      </Grid>
    )
  }
}

const styles = {
  container: {
    marginLeft: '20px',
    marginRight: '20px',
  },
  video: {
    border: '2px solid #636363',
    borderRadius: '15px',
    padding: "5px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
}

const mapStateToProps = (state) => {
  return { project: state.project }
}

export default connect(mapStateToProps)(Project);
