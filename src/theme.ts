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
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: "#FAFAFA",
          borderRadius: "8px",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          "&.Mui-selected": {
            borderRadius: "8px",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          },
          "&.MuiToggleButtonGroup-lastButton": {
            marginLeft: "-10px",
          },
          color: "#414651",
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        outlined: {
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          lineHeight: "24px",
          border: "1px solid #D8DAE5",
          color: "black",
          borderRadius: 8,
          "&:hover": {
            backgroundColor: "#f2f2f2",
          },
          "span.MuiButton-icon": {
            width: "24px",
            height: "24px",
          },
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
    },
    h1: {
      fontSize: "2rem",
      lineHeight: "3rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: "1.75rem",
      textTransform: "none",
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body1: {
      fontWeight: 1,
      color: "#414651",
    },
  },
});

export default theme;
