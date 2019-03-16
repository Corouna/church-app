import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import '.../../index.css';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridbg: {
    backgroundColor: '#141414',
    paddingBottom: 30
  },
  gridtitle: {
    padding: '20px 0 0 20px',
    fontSize: 15,
    fontWeight: 600,
    color: '#D6CAAB'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  card: {
    maxWidth: 350,
    margin: '0 5px'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icons: {
    color: '#BB8E1C',
    fontSize: 20
  },
  show: {
    visibility: 'visible',
    transition: 'opacity 400ms, visibility 400ms'
  },
  hide: {
    visibility: 'hidden',
    transition: 'opacity 400ms, visibility 400ms'
  }
});

const UndukNgadau = (props) => {
  const { classes } = props;

  return (
    <div>
      <Grid
        container
        spacing={16}
        className={classNames(classes.gridbg, classes.nopadding)}
      />
    </div>
  )
}

UndukNgadau.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UndukNgadau);