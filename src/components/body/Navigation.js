import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ItemsCarousel from 'react-items-carousel';
import { Menu } from '../../utils/Data';
import range from 'lodash/range';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NaviCard from '../widget/NaviCard';
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

class Navigation extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			children: [],
			activeItemIndex: 0,
			show: false
		};

		// For carousel icons
		this.showIcon = this.showIcon.bind(this);
	}
 
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				children: this.createChildren( Menu ),
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
	// createChildren = n => n.map( (a, i) => <NaviCard key={i} title={a.title} img={a.img} /> );

	createChildren = n => n.map((a, i) => (
	  <Grid onClick={(evt) => this.props.history.push(a.path)}>
	    <NaviCard key={i} title={a.title} img={a.img} />
	  </Grid>
	));

	// createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);
 
	changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
 
	render() {
		console.log('Can i see what is menu ::: ', Menu);

		const Loader = () => (
		  	<ContentLoader 
				height={250}
				width={200}
				speed={2}
				primaryColor="#f3f3f3"
				secondaryColor="#ecebeb"
			>
				<rect x="0" y="0" rx="4" ry="4" width="180" height="60" /> 
				<rect x="0" y="70" rx="3" ry="3" width="180" height="8" />  
			</ContentLoader>
		);

		const { classes } = this.props;
		const { activeItemIndex, children } = this.state;
 
		return (
			<Grid container spacing={16} className={classNames(classes.gridbg, classes.nopadding)}>
        		<Grid item xs={12} className={classes.nopadding}>
					<ItemsCarousel
						// For mouseover event
						onMouseEnter={this.showIcon}
						onMouseLeave={this.showIcon}

						// Placeholder configurations
						enablePlaceholder
						numberOfPlaceholderItems={Menu.length}
						minimumPlaceholderTime={1000}
						placeholderItem={<Loader />}
		 
						// Carousel configurations
						numberOfCards={Menu.length}
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

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
