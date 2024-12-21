import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}

export default App;
