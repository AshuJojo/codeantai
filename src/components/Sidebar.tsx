import { Box, MenuItem, MenuList, Select, Stack } from "@mui/material";
import StyledMenuItem from "./StyledMenu";

const Sidebar = () => {
  return (
    <Stack
      direction="column"
      sx={{ bgcolor: "white", height: "100vh", px: 2, py: 3 }}
    >
      {/* Start */}
      <Stack direction="column" spacing={2} sx={{ alignItems: "start" }}>
        {/* Header */}
        <Stack
          component="header"
          direction="column"
          spacing={2.5}
          sx={{ px: 0.5, width: "100%", alignItems: "start" }}
        >
          <Box component="img" src="/logo-long.svg" height={32} width="auto" />
          <Select
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
        <MenuList sx={{ width: "100%" }}>
          <StyledMenuItem active={true} sx={{ borderRadius: 2 }}>
            Repositories
          </StyledMenuItem>
        </MenuList>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
