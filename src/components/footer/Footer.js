import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  	root: {
    	flexGrow: 1,
    	backgroundColor: '#141414',
    	padding: '70px 15px 20px'
  	},
  	paper: {
    	padding: theme.spacing.unit * 2,
    	textAlign: 'center',
    	color: '#fff',
    	backgroundColor: '#141414'
    },
    footer: {
    	height: 200,
    	width: 900,
    	maxWidth: 900,
    	margin: '20px auto 0',
    	backgroundColor: '#141414',
    	padding: '0 4%'
    },
    links: {
    	marginBottom: '1em'
    },
    linkwrapper: {
    	width: 500,
    	margin: '0 auto',
    	textAlign: 'center'
    },
    anchor: {
    	marginRight: 30,
    	display: 'inline-block',
    	verticalAlign: 'middle',
    	color: 'grey',
    	fontSize: 30
    },
    hover: {
    	cursor: 'pointer'
    },
    away: {
    	cursor: 'none'
    },
    copyright: {
    	textAlign: 'center',
    	color: 'grey',
    	marginTop: 120
    },
    brand: {
    	fontWeight: 700,
    	color: '#D6CAAB',
    	marginLeft: 10,
    	marginRight: 10
    }
});

const links = {
	facebook : '//facebook.com',
	instagram : '//instagram.com',
	twitter : '//twitter.com',
	youtube : '//youtube.com'
};


class Footer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			hover: false
		};

		// For link icons, display pointer when hovering
		this.onHovering = this.onHovering.bind(this);
	}

  	onHovering(){
  		console.log("Let me see what is the hover :::>> ", this.isHovering);
  		this.setState(this.isHovering);
  	}

  	isHovering(state){
  		return {
	      	hover: !state.hover,
	    };
  	}

	render(){
		const { classes } = this.props;
		const anchor = this.state.hover ? 'anchor hover' : 'anchor';

		return (
		    <div className={classes.root}>
		      	<Grid container spacing={24}>
		        	<div className={classes.footer}>
		        		<div className={classes.links}>
		        			<div className={classes.linkwrapper}>
		        				<a href={links.facebook} target='_blank' onMouseEnter={this.onHovering} onMouseLeave={this.onHovering} className={ `${classes.anchor} ${ this.state.hover ? classes.hover : classes.away }` }>
			        				<FontAwesomeIcon icon={faFacebook} />
			        			</a>
			        			<a href={links.instagram} target='_blank' onMouseEnter={this.onHovering} onMouseLeave={this.onHovering} className={ `${classes.anchor} ${ this.state.hover ? classes.hover : classes.away }` }>
			        				<FontAwesomeIcon icon={faInstagram} />
			        			</a>
			        			<a href={links.twitter} target='_blank' onMouseEnter={this.onHovering} onMouseLeave={this.onHovering} className={ `${classes.anchor} ${ this.state.hover ? classes.hover : classes.away }` }>
			        				<FontAwesomeIcon icon={faTwitter} />
			        			</a>
			        			<a href={links.youtube} target='_blank' onMouseEnter={this.onHovering} onMouseLeave={this.onHovering} className={ `${classes.anchor} ${ this.state.hover ? classes.hover : classes.away }` }>
			        				<FontAwesomeIcon icon={faYoutube} />
			        			</a>
		        			</div>
		        		</div>
		        		<div className={classes.copyright}>
		        			<span>© 2019 <span className={classes.brand}>Kihooii</span> (Powered by KDCA Youth).</span>
		        		</div>
		        	</div>
		      </Grid>
		    </div>
		  );
	}


}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
