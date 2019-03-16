import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

/*
	TODO : To implement glowing animations on block
*/

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
		padding: '15px 10px' 
	},
	card: {
		height: 170,
		listStyle: 'none'
	},
	glow: {
		MozBoxShadow: '0 0 5px #fff',
		WebkitBoxShadow: '0 0 5px #fff',
		boxShadow: '0px 0px 5px #fff'
	},
	dim: {
		MozBoxShadow: 'none',
		WebkitBoxShadow: 'none',
		boxShadow: 'none'
	},
	title: {
		color: '#fff',
	},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
		fontWeight: 700,
		fontSize: 18,
		textShadow: '2px 2px 1px rgba(214,202,171,0.45)'
	},
});

class NaviCard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			glow: false
		};

		this.onHovering = this.onHovering.bind(this);
	}

	onHovering(){
  		this.setState(this.isHovering);
  	}

  	isHovering(state){
  		return {
	      	glow: !state.glow,
	    };
  	}

	render(){
		const { classes } = this.props;

		return (
			<GridListTile key={this.props.key} className={classes.card}>
				<img src={this.props.img} alt={this.props.title} height={'100%'} />
				<GridListTileBar
					title={this.props.title}
					classes={{
						root: classes.titleBar,
						title: classes.title,
					}}
				/>
			</GridListTile>
		);
	}

}

NaviCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NaviCard);