import Grid from "@mui/material/Grid2";
import Sidebar from "../components/Sidebar";
import RepositoriesCard from "../components/RepositoriesCard";

const Dashboard = () => {
  return (
    <Grid container sx={{ height: "100vh", textAlign: "start" }}>
      <Grid size={2}>
        <Sidebar />
      </Grid>
      <Grid size={10} p={3}>
        <RepositoriesCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
