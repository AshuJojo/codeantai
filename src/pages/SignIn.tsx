import { Box, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SignInCard from "../components/SignInCard";

const SignIn = () => {
  return (
    <Grid container spacing={0}>
      <Grid
        size={{ xs: 0, md: 6 }}
        sx={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Paper
          sx={{
            position: "relative",
            borderRadius: 0,
            height: "100%",
          }}
        >
          <Box
            component="img"
            src="src/assets/hero-rabbit-img.png"
            sx={{
              width: "284px",
              height: "auto",
              position: "absolute",
              bottom: 0,
            }}
          />
          <Box
            component="img"
            src="src/assets/hero-stats-img.png"
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
        </Paper>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          padding: {
            xs: "1rem",
            md: "1.5rem",
            alignContent: "center",
          },
        }}
      >
        <Stack spacing={4} sx={{ justifyContent: "center", alignItems: "center" }}>
          <SignInCard />
          <Typography variant="body1">
            By signing up you agree to the{" "}
            <span style={{ fontWeight: "bold" }}>Privacy Policy.</span>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SignIn;
