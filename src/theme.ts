import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#175CD3",
      main: "#1570EF",
      light: "#EFF8FF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#171717",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "1px solid #E9EAEB",
          borderRadius: "12px",
        },
      },
    },
  },
});

export default theme;
