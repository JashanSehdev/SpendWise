import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  "palette": {
    "primary": {
      "main": "#ffffff",
      "contrastText": "#03060e"
    },
    "secondary": {
      "main": "#6363c6",
      "contrastText": "#f3f4fc"
    },
    "success": {
      "main": "#009843",
      "contrastText": "#ecf9ee"
    },
    "warning": {
      "main": "#da9600",
      "contrastText": "#211300"
    },
    "error": {
      "main": "#df2225",
      "contrastText": "#fff0ee"
    },
    "info": {
      "main": "#0081d0",
      "contrastText": "#eaf7ff"
    },
    "background": {
      "default": "#1a1816",
      "paper": "#211f1e"
    },
    "text": {
      "primary": "#faf9f9",
      "secondary": "#757472"
    },
    "divider": "#dfe1e6",
    "mode": "light"
  },
  components: {
    MuiButton : {
      variants : [ 
        {
          props: { variant: 'dashed' }, 
          style: {
            textTransform: 'none',
            backgroundColor: 'white',
            color : 'black',
            border: '2px solid white',

            '&:hover': {
              backgroundColor: '#f2f5fc',
            },
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' }, 
          style: {
            border: '2px dashed #6363c6',
            color: '#6363c6',
          },
        },
      ],
    }
  },
  "spacing": 8,
  "shape": {
    "borderRadius": 4
  }
});

export default theme;