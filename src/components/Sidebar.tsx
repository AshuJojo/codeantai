import {
  alpha,
  Box,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { BiBook, BiCloud, BiCodeAlt, BiHome } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router";
import StyledMenuItem from "./StyledMenu";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Menu List Component
  const getMenuList = () => {
    return (
      <MenuList
        component="nav"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
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
    );
  };

  return (
    <Stack
      direction="column"
      sx={{
        bgcolor: "white",
        height: { xs: "64px", md: "100vh" },
        px: { xs: 0, md: 2 },
        py: { xs: 0, md: 3 },
        borderRight: "1px solid #E9EAEB",
      }}
    >
      <Stack
        direction="column"
        spacing={{ xs: 0, md: 2.5 }}
        sx={{
          px: { xs: 0, md: 0.5 },
          width: "100%",
          height: "100%",
          alignItems: "start",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: 2, md: 0 },
          }}
        >
          {/* Logo */}
          <Link to={"/"}>
            <Box
              component="img"
              src="/logo-long.svg"
              height={32}
              width="auto"
            />
          </Link>

          {/* Menu Button */}
          {!isDesktop && (
            <>
              {menuOpen ? (
                <IoClose size={24} onClick={handleToggleMenu} />
              ) : (
                <RxHamburgerMenu size={24} onClick={handleToggleMenu} />
              )}
            </>
          )}
        </Stack>
        {/* User  */}
        {(menuOpen || isDesktop) && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              top: 0,
              bottom: 0,
              m: 0,
            }}
          >
            <Stack
              spacing={2}
              sx={{
                width: "100%",
                height: { xs: "450px", md: "100%" },
                position: "absolute",
                bgcolor: "white",
                px: { xs: 2, md: 0 },
                py: { xs: 2, md: 0 },
                zIndex: 1,
                left: 0,
                right: 0,
              }}
            >
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

              {/* Menu */}
              {getMenuList()}
            </Stack>
            {!isDesktop && (
              <Box
                sx={{
                  height: "100vh",
                  bgcolor: alpha("#000000", 0.5),
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
            )}
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
