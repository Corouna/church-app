// Main Application container
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// Application routes
import AppRoutes from '../routes';
// YouTube component
import YouTube from 'react-youtube';
import ModalVideo from 'react-modal-video'
// Components
import HeadNav from '../components/header/Nav';
import Footer from '../components/footer/Footer';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const App = () => {
  // Defaults to Malay
  const [locale, setLocale] = useState('malay');
  // const [openDialog, setOpenDialog] = useState(true);
  const [openVideo, setOpenVideo] = useState(true);

  return (
    <div>
      <ModalVideo channel='youtube' videoId='L61p2uyiMSo' isOpen={true} onClose={() => setOpenVideo(false)} />
      <Grid>
        <HeadNav setLocale={setLocale} />
      </Grid>
      <Grid>
        <BrowserRouter>
          <AppRoutes locale={locale} />
        </BrowserRouter>
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </div>
  )
}

export default App;
