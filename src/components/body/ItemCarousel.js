import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../widget/Card';
import ContentLoader from 'react-content-loader';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
		fontSize: 20,
		fontWeight: 600,
		color: '#D6CAAB',
		marginBottom: 15
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

const tileData = [
	{
		img: '/images/breakfast.jpg',
		title: 'Breakfast',
		author: 'jill111',
		cols: 2,
		featured: true,
	},
	{
		img: '/images/burgers.jpg',
		title: 'Tasty burger',
		author: 'director90',
	}
];

const screenMapper = {
  isDesktop: {
    cards: 5
  },
  isMobile: {
    cards: 3
  }
};

class CardList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			children: [],
			activeItemIndex: 0,
			show: false,
			screenSize: window.innerWidth,
      		cardAmount: 6
		};

		// For carousel icons
		this.showIcon = this.showIcon.bind(this);
	}
 
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				children: this.createChildren(tileData),
			})
		}, 100);
	}

  	showIcon(){
  		this.setState(this.toggleShow);
  	}

  	toggleShow(state){
  		return {
	      	show: !state.show,
	    };
  	}

	// To create the list of children inside
	createChildren = n => n.map( (a, i) => <Grid onClick={() => this.props.childAction(i)}><Card key={i} title={a.title} author={a.author} img={a.img} /></Grid> );

	// createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);
 
	changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
 
	render() {
		const Loader = () => (
		  	<ContentLoader
		  		speed={1}
    			primaryColor={'#333'}
    			secondaryColor={'#999'}
		  	>
		    	<rect x="0" y="0" rx="5" ry="5" width="200" height="90" />
		    	<rect x="170" y="100" rx="4" ry="4" width="30" height="20" />
		    	<rect x="0" y="100" rx="3" ry="3" width="100" height="20" />
		  	</ContentLoader>
		);

		const { title, classes } = this.props;
		const { activeItemIndex, children, screenSize } = this.state;

		this.cardAmount = screenSize > 750 ? screenMapper['isDesktop'].cards : screenMapper['isMobile'].cards;
 
		return (
			<Grid container className={classNames(classes.gridbg, classes.nopadding)}>
				<Grid item xs={12} padding={0}>
					<div className={ classes.gridtitle }>{title}</div>
				</Grid>
        		<Grid item xs={12} className={classes.nopadding}>
					<ItemsCarousel
						// For mouseover event
						onMouseEnter={this.showIcon}
						onMouseLeave={this.showIcon}

						// Placeholder configurations
						enablePlaceholder
						numberOfPlaceholderItems={this.cardAmount}
						minimumPlaceholderTime={1000}
						placeholderItem={<Loader />}
		 
						// Carousel configurations
						numberOfCards={this.cardAmount}
						gutter={12}
						showSlither={true}
						firstAndLastGutter={true}
						freeScrolling={false}
		 
						// Active item configurations
						requestToChangeActive={this.changeActiveItem}
						activeItemIndex={activeItemIndex}
						activePosition={'center'}
		 
						chevronWidth={24}
						rightChevron={<FontAwesomeIcon onMouseEnter={this.showIcon} onMouseLeave={this.showIcon} className={ `${classes.icons} ${ this.state.show ? classes.show : classes.hide }` } icon={faChevronCircleRight} />}
						leftChevron={<FontAwesomeIcon onMouseEnter={this.showIcon} onMouseLeave={this.showIcon} className={ `${classes.icons} ${ this.state.show ? classes.show : classes.hide }` } icon={faChevronCircleLeft} />}
						outsideChevron={false}
						className={ classes.carousel }
					>
						{children}
					</ItemsCarousel>
				</Grid>
			</Grid>

		);  
	}
};

CardList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);