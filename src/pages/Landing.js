// Landing page
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import '.../../index.css';
import Highlight from '../components/widget/Highlight';
import Navigation from '../components/body/Navigation';
import CardList from '../components/body/ItemCarousel.js';
import Grid from '@material-ui/core/Grid';
import '../css/fontface.css';
import '../css/custom.css';

const styles = theme => ({
	landingheader: {
		width: 450,
		height: 650,
		position: 'absolute',
		top: 0,
		left: 50,
		background: 'rgb(128,128,128)',
		background: 'linear-gradient(to bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0.9) 25%, rgba(128,128,128,0.9) 55%, rgba(128,128,128,0.9) 65%, rgba(128,128,128,0.7) 75%, rgba(128,128,128,0.3) 85%, rgba(128,128,128,0.2) 90%, rgba(128,128,128,0.1) 95%, rgba(128,128,128,0) 100%)',
		zIndex: 1,
		borderRadius: '0 0 20px 20px',

	},
	landingheader_content: {
		width: 400,
		height: 450,
		position: 'relative',
		top: 30,
		left: 20,
		backgroundColor: 'transparent',
		opacity: 1,
		zIndex: 1
	},
	logo: {
		position: 'relative',
		left: '33%'
	},
	churchdenom: {
		marginTop:20,
		fontSize: 30,
		fontWeight: 400,
		textAlign: 'center',
		color: '#DCDBDB',
		fontFamily: 'Roboto Condensed'
	},
	show: {
	  background: 'rgb(128,128,128)',
	  background: 'linear-gradient(to bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0.9) 25%, rgba(128,128,128,0.9) 55%, rgba(128,128,128,0.9) 65%, rgba(128,128,128,0.7) 75%, rgba(128,128,128,0.3) 85%, rgba(128,128,128,0.2) 90%, rgba(128,128,128,0.1) 95%, rgba(128,128,128,0) 100%)',
	  transition: 'background 1s',
	},
	hide: {
	  background: 'transparent',
	  transition: 'background 1s',
	},
	visible: {
		opacity: 1,
		transition: 'opacity 0.7s ease-in-out'
	},
	hidden: {
		opacity: 0,
		transition: 'opacity 0.7s ease-in-out'
	},
  	titlebar: {
    	backgroundColor: '#141414',
    	height: '10vh'
  	},
  	greeting: {
  		color: 'grey',
  		fontSize: '3.3em',
  		fontWeight: 'bold',
  		position: 'absolute',
  		left: '4%',
  		bottom: '7%'
  	},
  	extendgreet: {
  		left: '4%',
	    bottom: '3%',
	    color: 'grey',
	    position: 'absolute',
	    fontSize: '1.5em',
	    fontWeight: 'lighter'
  	}
});

class Landing extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(evt) {
    const position = window.scrollY;
    const show = position ? false : true;

    if (show !== this.state.show) {
      this.setState((prevState, props) => ({
        ...prevState,
        show,
      }));
    }
  }

  render(){
  	const { locale, classes } = this.props;

	return (
	  <div>
	    <div className={`${classes.landingheader} ${this.state.show ? classes.show : classes.hide}`}>
	      <div className={`${classes.landingheader_content} ${this.state.show ? classes.visible : classes.hidden}`}>
	      	<img src='/images/Adventist_Logo.png' height={120} className={classes.logo} />
	        <div className={classes.churchdenom}>Seventh-Day Adventist Likas</div>
	      </div>
	    </div>
	    <Highlight locale={locale} />
	    <Grid container className={classes.titlebar}>
	    	<div className={`${this.state.show ? classes.visible : classes.hidden}`}>
		     	<div className={classes.greeting}>Selamat Datang Ke Website Gereja Seventh-Day Adventist Likas</div>
		     	<div className={classes.extendgreet}>Ketahui berita dan perkembangan terbaru di dalam gereja melalui laman ini.</div>
		    </div>
	    </Grid>
	  </div>
	)
  }
}

Landing.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
