import Grid from "@mui/material/Grid2";
import RepositoriesCard from "../components/RepositoriesCard";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <Grid
      container
      sx={{ height: "100vh", textAlign: "start", overflow: "hidden" }}
    >
      <Grid size={{ xs: 12, md: 3, lg: 2 }}>
        <Navbar />
      </Grid>
      <Grid size={{ xs: 12, md: 9, lg: 10 }} p={{ xs: 0, md: 3 }}>
        <RepositoriesCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
