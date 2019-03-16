import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = {
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: 'transparent',
    height: 65,
    position: 'fixed !important',
    boxShadow: 'none'
  },
  show: {
    backgroundColor: '#141414',
    transition: 'background-color 0.7s',
  },
  hide: {
    backgroundColor: 'transparent',
    transition: 'background-color 0.7s',
  },
  logo: {
    position: 'relative',
    top: -3,
    left: 10,
    marginRight: 25
  }, 
  title: {
    marginTop: 15,
    fontWeight: 300
  },
  titletext: {
    position:'relative',
    top: -13
  },
  lighter: {
    color: '#B7D8FE'
  },
  darker: {
    color: '#477FC0'
  },
  group: {
    position: 'absolute',
    right: 10,
    padding: 4,
    top: 12,
    right: 20
  },
  left: {
    backgroundColor: '#fff',
    borderRadius: '15px 0 0 15px',
    padding: '0 10px',
    fontSize: 10,
    color: '#424242'

  },
  center: {
    backgroundColor: '#fff',
    padding: '0 10px',
    fontSize: 10,
    color: '#424242'
  },
  right: {
    backgroundColor: '#fff',
    borderRadius: '0 15px 15px 0',
    padding: '0 10px',
    fontSize: 10,
    color: '#424242'
  }
};

class HeadNav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(evt) {
    const position = window.scrollY;
    const show = position ? true : false;

    if (show !== this.state.show) {
      this.setState((prevState, props) => ({
        ...prevState,
        show,
      }));
    }
  }

  render() {
    const { classes, setLocale } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={`${classes.bar} ${this.state.show ? classes.show : classes.hide}`} >
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className={`${classes.title} ${this.state.show ? classes.lighter : classes.darker}`}>
              <img src='/images/Adventist_Logo.png' height={40} className={classes.logo} /><span className={classes.titletext} >Seventh-Day Adventist Likas</span>
						</Typography>
            <ToggleButtonGroup className={classes.group}>
              <ToggleButton
                onClick={() => setLocale('malay')}
                value="malay"
                className={classes.left}>
                {'Melayu'}
              </ToggleButton>
              <ToggleButton
                onClick={() => setLocale('eng')}
                value="eng"
                className={classes.right}>
                {'English'}
              </ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

HeadNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeadNav);
