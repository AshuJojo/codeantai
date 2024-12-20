import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const SignIn = () => {
  return (
    <Grid container spacing={0}>
      <Grid
        size={{ xs: 0, md: 6 }}
        sx={{ position: "relative", height: "100vh" }}
      >
        <Box
          component="img"
          src="/assets/hero-rabbit-img.png"
          sx={{
            width: "284px",
            height: "auto",
            position: "absolute",
            bottom: 0,
          }}
        />
        <Box
          component="img"
          src="/assets/hero-stats-img.png"
          sx={{
            width: "29rem",
            height: "auto",
            position: "absolute",
            zIndex: 2,
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>Item 2</Grid>
    </Grid>
  );
};

export default SignIn;
