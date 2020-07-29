import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import 'fontsource-roboto';

const SelmaTheme = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Roboto',
        'TisaSansWeb',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1:{
        fontFamily: 'TisaSansWeb',
        fontSize: '1rem',
        fontWeight: 'bold'
      },
      h2: {
        fontFamily: 'TisaSansWeb',
        fontSize: '1.8rem',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      h3: {
        fontFamily: 'TisaSansWeb',
        fontSize: '1.6rem',
      },
      h4: {
        fontFamily: 'TisaSansWeb',
        fontSize: '1.4rem',
      },
      h5: {
        fontFamily: 'TisaSansWeb',
        fontSize: '1.2rem',
      },
      body1: {
        fontSize: 13,
      },
    },
    palette: {
      primary: {
        main: '#db5462', // Mc² pink
      },
      secondary: {
        main: '#4d5d5d', // footer gray
      },
    },
  });
  return responsiveFontSizes(theme)
}

export default SelmaTheme;