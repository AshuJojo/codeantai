import Grid from "@mui/material/Grid2";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Grid container sx={{ height: "100vh", textAlign: "start" }}>
      <Grid size={2}>
        <Sidebar />
      </Grid>
      <Grid size={10}>Content</Grid>
    </Grid>
  );
};

export default Dashboard;
