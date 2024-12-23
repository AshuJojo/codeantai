import {
  Box,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { BiBook, BiCloud, BiCodeAlt, BiHome } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router";
import StyledMenuItem from "./StyledMenu";

const Sidebar = () => {
  return (
    <Stack
      direction="column"
      sx={{
        bgcolor: "white",
        height: "100vh",
        px: 2,
        py: 3,
        borderRight: "1px solid #E9EAEB",
      }}
    >
      <Stack
        direction="column"
        spacing={2.5}
        sx={{ px: 0.5, width: "100%", alignItems: "start" }}
      >
        <Link to={"/"}>
          <Box component="img" src="/logo-long.svg" height={32} width="auto" />
        </Link>
        <Select
          value={0}
          defaultValue={0}
          size="small"
          sx={{ textAlign: "start", borderRadius: 2 }}
          fullWidth
        >
          <MenuItem value={0}>Ashutosh Sharma</MenuItem>
          <MenuItem value={1}>Add User</MenuItem>
        </Select>
      </Stack>

      {/* Menu */}
      <MenuList
        component="nav"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
          mt: 2,
          p: 0,
        }}
      >
        {/* Start */}
        <Stack>
          <StyledMenuItem active={true}>
            <BiHome size={24} />
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, color: "white", fontWeight: "600" }}
            >
              Repositories
            </Typography>
          </StyledMenuItem>
          <StyledMenuItem>
            <BiCodeAlt size={24} />
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, fontWeight: "600" }}
            >
              AI Code Review
            </Typography>
          </StyledMenuItem>
          <StyledMenuItem>
            <BiCloud size={24} />
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, fontWeight: "600" }}
            >
              Cloud Security
            </Typography>
          </StyledMenuItem>
          <StyledMenuItem>
            <BiBook size={24} />
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, fontWeight: "600" }}
            >
              How to Use
            </Typography>
          </StyledMenuItem>
          <StyledMenuItem>
            <IoSettingsOutline size={24} />
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, fontWeight: "600" }}
            >
              Settings
            </Typography>
          </StyledMenuItem>
        </Stack>
        {/*End*/}
        <Stack direction="column">
          <StyledMenuItem>
            <BsTelephone size={24} />
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, fontWeight: "600" }}
            >
              Support
            </Typography>
          </StyledMenuItem>
          <StyledMenuItem>
            <FiLogOut size={24} />
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, fontWeight: "600" }}
            >
              Logout
            </Typography>
          </StyledMenuItem>
        </Stack>
      </MenuList>
    </Stack>
  );
};

export default Sidebar;
