import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
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
});

const tileData = [
	{
		img: '../../images/breakfast.jpg',
		title: 'Breakfast',
		author: 'jill111',
		cols: 2,
		featured: true,
	},
	{
		img: '../../images/burgers.jpg',
		title: 'Tasty burger',
		author: 'director90',
	},
	{
		img: '../../images/camera.jpg',
		title: 'Camera',
		author: 'Danson67',
	},
	{
		img: '../../images/morning.jpg',
		title: 'Morning',
		author: 'fancycrave1',
		featured: true,
	},
	{
		img: '../../images/hats.jpg',
		title: 'Hats',
		author: 'Hans',
	},
	{
		img: '../../images/honey.jpg',
		title: 'Honey',
		author: 'fancycravel',
	},
	{
		img: '../../images/vegetables.jpg',
		title: 'Vegetables',
		author: 'jill111',
		cols: 2,
	},
	{
		img: '../../images/plant.jpg',
		title: 'Water plant',
		author: 'BkrmadtyaKarki',
	},
	{
		img: '../../images/mushroom.jpg',
		title: 'Mushrooms',
		author: 'PublicDomainPictures',
	},
	{
		img: '../../images/olive.jpg',
		title: 'Olive oil',
		author: 'congerdesign',
	},
	{
		img: '../../images/star.jpg',
		title: 'Sea star',
		cols: 2,
		author: '821292',
	},
	{
		img: '../../images/bike.jpg',
		title: 'Bike',
		author: 'danfador',
	},
];

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
function OneLineList(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{tileData.map(tile => (
					<GridListTile key={tile.img} className={classes.card}>
						<img src={require( '../../images/star.jpg' )} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
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
				))}
			</GridList>
		</div>
	);
}

OneLineList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OneLineList);