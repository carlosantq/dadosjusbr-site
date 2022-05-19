import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7f3d8b',
    },
    secondary: {
      main: '#3e5363',
    },
    info: {
      main: '#ffffff',
    },
    success: {
      main: '#3edbb1',
    },
    background: {
      paper: '#3e5363',
      default: '#3e5363',
    },
  },
  typography: {
    fontFamily: "'Roboto Condensed', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      paddingBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '700',
      paddingBottom: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderWidth: '2px',
          textTransform: 'none',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
  },
});

export default theme;
