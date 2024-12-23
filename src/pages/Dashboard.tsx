import Grid from "@mui/material/Grid2";
import RepositoriesCard from "../components/RepositoriesCard";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Grid container sx={{ height: "100vh", textAlign: "start" }}>
      <Grid size={{ xs: 4, md: 3, lg: 2 }}>
        <Sidebar />
      </Grid>
      <Grid size={{ xs: 8, md: 9, lg: 10 }} p={3}>
        <RepositoriesCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
