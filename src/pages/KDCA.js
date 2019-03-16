import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import '.../../index.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import KDCAHistory from './subpages/kdca/history';
import Gallery from '../components/widget/Gallery';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#141414',
    color: 'white'
  },
  gridbg: {
    backgroundColor: '#141414',
    paddingBottom: 30
  },
  headimage: {
    height: 150
  },
  intro: {
    padding: '0 7%',
    margin: '30px 0 25px',
    color: 'grey',
    textAlign: 'justify'
  }
});

const KDCA = (props) => {

  const [value, setValue] = useState(0);
  const { match, classes } = props;
  const page = match.path.replace('/', '');
  const titles = ['History', 'Logo and Flag', 'KDCA CCM', 'Hongkod Koisaan', 'Visions'];

  return (
    <div>
      <Gallery page={page} />
      <Grid container spacing={16} className={classNames(classes.gridbg, classes.nopadding)}>
        <Grid>
          <div className={classes.intro}>
            <p>The Kadazandusun Cultural Association Sabah (KDCA), is non-political Association of 40 indigenous ethnic communities of Sabah, first registered under the Malaysian Societies Act 1966, on April 29, 1966 by the then Deputy Registrar of Societies Malaysia, Mr. J. P. Rutherford.</p>
            <p>The KDCA is presently involved in various activities related to Research & Documentation, preservation, development and promotions of the Kadazandusun culture: language and literary works; Bobolians & Rinaits; traditional medicine, traditional food and beverages; music, songs, dances and dramas; traditional arts, crafts and designs; traditional sports; traditional wears and costumes. Lately, along with the growing international cooperation of the world’s indigenous peoples, indigenous knowledge, intellectual property and traditional resource rights conservation, enhancement and protection have also become new areas of the KDCA’s concern and responsibility. The KDCA continues to play its vital role in fostering unity, friendship and cooperation among the multi-racial population of Sabah through its participatory cultural programs and celebrations such as the Village, District and State levels Annual “Kaamatan Festival”. Over the years, it has sent Cultural Performance Troupes on goodwill tours to other Malaysian States, to neighboring Asian Countries, to Europe, America, Canada and New Zealand.</p>
            <p>Nevertheless, like all other organizations KDCA can only move and grow in as much and as far as its resources, leaders and members can power it. There is a constant need for more young, professional, energetic and resourceful KDCA members to contribute towards KDCA’s continuous growth and development. It is therefore imperative that people must know and understand KDCA’s vision, goals, roles, functions and programs of activities and most of all membership privileges first before involving themselves in KDCA. This brochure hopes to enlighten KDCA members, prospective members, the public and global friends what the KDCA generally is, yesterday, today and ever onwards, tomorrow.</p>
          </div>
        </Grid>
        <Paper className={classes.root}>
          <Tabs
            value={ value }
            onChange={ (event, value) => setValue( value ) }
            indicatorColor="secondary"
            textColor="inherit"
            centered
          >
            {titles.map((title, index) => (
              <Tab label={title} />
            ))}
          </Tabs>
          {value === 0 && <KDCAHistory />}
          {value === 1 && <KDCAHistory />}
          {value === 2 && <KDCAHistory />}
          {value === 3 && <KDCAHistory />}
          {value === 4 && <KDCAHistory />}
        </Paper>
      </Grid>
    </div>
  )
}

KDCA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KDCA);
