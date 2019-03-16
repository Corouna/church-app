import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  contents: {
    color: 'grey',
    fontSize: 16,
    fontFamily: 'Roboto'
  }
});

class KDCAHistory extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
    <Typography component="div" style={{ padding: 8 * 3 }} className={classes.contents}>
      <p>
        KDCA’s humble beginning started with the birth of the Society of Kadazan Penampang in 1953. This society paved the way for the formation of the Kadazan Cultural Association Sabah (KCA) in 1963, which in turn transformed into the present KDCA on September 25, 1991. 
      </p>
      <p>
        Ever since its inception in the early 50’s, the KDCA has focused much of its efforts in the preservation, development, enrichment and promotion of the Kadazandusun multi-ethnic cultures. Without KDCA, much more of the currently existing Kadazandusun cultural heritage would have sunk to oblivion by now, buried lost forever or displaced by the ever dominating modern cultures. The KDCA’s Triennial Delegates Conference provides for the much needed forum where the various Kadazandusun multi-ethnic representatives discuss major issues affecting them and their future and take up both individual and collective stand and actions to resolve common challenges.
      </p>
    </Typography>
  );
  }
}

KDCAHistory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KDCAHistory);