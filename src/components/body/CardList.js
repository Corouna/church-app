import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from "../widget/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
	grid: {
		padding: 10
	}
});

class CardList extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Grid container padding={20} spacing={24} justify={'center'}>
					<Grid item md={3}>
						<Card />
					</Grid>
					<Grid item md={3}>
						<Card />
					</Grid>
					<Grid item md={3}>
						<Card />
					</Grid>
				</Grid>
			</div>
		);
	}
};

export default CardList;