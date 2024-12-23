import { MenuItem, styled } from "@mui/material";

export type StyledMenuItemProps = {
  active?: boolean;
};

const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>(
  ({ theme, active }) => ({
    width: "100%",
    backgroundColor: active ? theme.palette.primary.main : "transparent",
    color: active
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

export default StyledMenuItem;
;