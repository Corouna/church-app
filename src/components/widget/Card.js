import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
		height: 140,
		listStyle: 'none'
	},
	title: {
		color: '#fff',
	},
	titleBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

class Card extends React.Component {

	constructor(props) {
		super(props);

		// this.state = {
	 //  		zoom: false,
		// };

		// this.handleScroll = this.handleScroll.bind(this);
		// Alternatively, you can throttle scroll events to avoid
		// updating the state too often. Here using lodash.
		// this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
	}

  	// componentDidMount() {
   //  	window.addEventListener('scroll', this.handleScroll, { passive: true });
  	// }

  	// componentWillUnmount() {
   //  	window.removeEventListener('scroll', this.handleScroll);
  	// }

  	// handleScroll(evt) {
   //  	const position = window.scrollY;
   //  	const show = position ? true : false;

   //  	if (show !== this.state.show) {
   //    		this.setState((prevState, props) => ({
   //      		...prevState,
   //      		show,
   //    		}));
   //  	}
  	// }

	render(){
		const { classes } = this.props;

		return (
			<GridListTile key={this.props.key} className={classes.card}>
				<img src={this.props.img} alt={this.props.title} />
				<GridListTileBar
					title={this.props.title}
					classes={{
						root: classes.titleBar,
						title: classes.title,
					}}
					actionIcon={
						<IconButton>
							<StarBorderIcon className={classes.title} />
						</IconButton>
					}
				/>
			</GridListTile>
		);
	}

}

Card.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);