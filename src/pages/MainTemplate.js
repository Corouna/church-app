// Example of using template
import React from 'react';
// Components
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const MainTemplate = (props) => {
  // Extract page from path
  let { match: { params: { page } } } = props;
  const { history } = props;
  console.log('Main template props', props)

  // Ideally, we should not have page paths that doesn't exist
  // We'll have to somewhat handle with a 404
  // For now, lets just default to 'test'
  if (page !== 'test' && page !== 'elsewhere') {
    page = 'test';
  }

  // Example of data passed in via props
  // For demo purpose we hardcoding it
  // Can easily mapped back by 'page'
  const data = {
    elsewhere: {
      image: '/path/of/elsewhere/image',
      paragraph: 'An example paragraph, imagine this is content for elsewhere page'
    },
    test: {
      image: '/path/of/test/image',
      paragraph: 'An example paragraph, imagine this is content for test page'
    }
  }

  // Here we retrieve data for this page
  const { paragraph, image } = data[page];

  return (
    <Grid align='center'>
      <Grid>
        Something to push items down
      </Grid>
      <Grid>
        Something to push items down
      </Grid>
      <Grid>
        Something to push items down
      </Grid>
      <Grid>
        {`This is ${page} page`}
      </Grid>
      <Grid>
        {`Example of  ${page} data`}
      </Grid>
      <Grid>
        {`Image path: ${image}`}
      </Grid>
      <Grid>
        {`Example content: ${paragraph}`}
      </Grid>
      <Grid>
        <Button variant='contained' onClick={() => history.push('/main/test')} >
          {'Go to test'}
        </Button>
        <Button variant='contained' onClick={() => history.push('/main/elsewhere')} >
          {'Go to else where'}
        </Button>
      </Grid>
      <Grid>
        <Button color='primary' variant='contained' onClick={() => history.push('/')} >
          {'Back to Landing'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainTemplate;
