import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import App from './components/App';
import 'mapbox-gl/dist/mapbox-gl.css';
import './main.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: indigo,
  },
});

function Index() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

render(<Index />, document.getElementById('root'));
