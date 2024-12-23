import { MenuItem, styled } from "@mui/material";

export type StyledMenuItemProps = {
  active?: boolean;
};

const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>(
  ({ theme, active }) => ({
    width: "100%",
    backgroundColor: active ? theme.palette.primary.main : "transparent",
    color: active ? "white" : "black",
    borderRadius: 8,
    padding: "10px 14px 10px 14px",
    disableRipple: active ? true : false,
    "&:hover": {
      backgroundColor: active
        ? theme.palette.primary.main
        : theme.palette.primary.light,
      cursor: active ? "default" : "pointer",
    },
    "& .MuiTouchRipple-root": {
      display: active ? "none" : "block",
    },
  })
);

export default StyledMenuItem;
