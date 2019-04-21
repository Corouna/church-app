// Landing page
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import '.../../index.css';
import Highlight from '../components/widget/Highlight';
import Navigation from '../components/body/Navigation';
import CardList from '../components/body/ItemCarousel.js';
import Grid from '@material-ui/core/Grid';
import '../css/fontface.css';
import '../css/custom.css';
import '../css/landing.css';

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
	activity_label: {
		marginTop:20,
		fontSize: 30,
		fontWeight: 400,
		textAlign: 'center',
		color: '#DCDBDB',
		fontFamily: 'Roboto Condensed'
	},
	show: {
	  background: 'rgb(16,153,180)',
	  background: 'linear-gradient(to bottom, rgba(16,153,180,1) 0%, rgba(16,153,180,0.9) 25%, rgba(16,153,180,0.9) 55%, rgba(16,153,180,0.9) 65%, rgba(16,153,180,0.7) 75%, rgba(16,153,180,0.3) 85%, rgba(16,153,180,0.2) 90%, rgba(16,153,180,0.1) 95%, rgba(16,153,180,0) 100%)',
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
	  	<div className='landing__mobile'>
        </div>
	    <div className={` ${'landing__header'} ${this.state.show ? classes.show : classes.hide}`}>
	      <div className={` ${'landing__header_content'} ${this.state.show ? classes.visible : classes.hidden}`}>
	        <div className='landing__header_content_label'>Church Weekly Activity</div>
	        <div className='landing__header_content_activity'>
	        	<div className='activity__day'>Wednesday</div>
	        	<div className='activity__time'>7.45pm - 9.15pm</div>
	        	<div className='activity__desc'>Midweek Prayer</div>
	        </div>
	        <div className='landing__header_content_activity'>
	        	<div className='activity__day'>Friday</div>
	        	<div className='activity__time'>7.30pm - 8.30pm</div>
	        	<div className='activity__desc'>Vesper</div>
	        </div>
	        <div className='landing__header_content_activity'>
	        	<div className='activity__day'></div>
	        	<div className='activity__time'>8.30pm - 9.30pm</div>
	        	<div className='activity__desc'>Choir Practice</div>
	        </div>
	        <div className='landing__header_content_activity'>
	        	<div className='activity__day'>Saturday</div>
	        	<div className='activity__time'>8.30am - 10.15am</div>
	        	<div className='activity__desc'>Sabbath School Service</div>
	        </div>
	        <div className='landing__header_content_activity'>
	        	<div className='activity__day'></div>
	        	<div className='activity__time'>10.40am - 9.15am</div>
	        	<div className='activity__desc'>Divine Worship</div>
	        </div>
	        <div className='landing__header_content_activity'>
	        	<div className='activity__day'></div>
	        	<div className='activity__time'>3.00pm - 6.00pm</div>
	        	<div className='activity__desc'>AY gathering & Choir Practice</div>
	        </div>
	        <div className='landing__header_content_activity'>
	        	<div className='activity__day'></div>
	        	<div className='activity__time'>6.00pm - 6.45pm</div>
	        	<div className='activity__desc'>Sundown Worship</div>
	        </div>
	      </div>
	    </div>
	    <Highlight locale={locale} />
	    <Grid container className='landing__title'>
	    	<div className={`${this.state.show ? classes.visible : classes.hidden}`}>
		     	<div className='landing__greet'>Welcome to Kota Kinabalu Seventh-Day Adventist Church</div>
		    </div>
	    </Grid>
	    <CardList />
	    <CardList />
	  </div>
	)
  }
}

Landing.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
