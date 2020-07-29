import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const SelmaTheme = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'ff-tisa-sans-web-pro',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1:{
        fontFamily: 'ff-tisa-sans-web-pro, roboto',
        fontSize: '1rem',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '1.8rem',
      },
      h3: {

      },
      h4: {

      },
      h5: {

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