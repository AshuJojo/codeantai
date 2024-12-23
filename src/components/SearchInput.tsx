import { SxProps, TextField, TextFieldProps } from "@mui/material";

interface SearchInputProps {
  icon?: JSX.Element;
  sx?: SxProps;
  props?: TextFieldProps;
}

const SearchInput = ({ icon, sx, ...props }: SearchInputProps) => {
  return (
    <TextField
      {...props}
      placeholder="Search Repositories"
      size="small"
      sx={sx}
      slotProps={{
        input: {
          startAdornment: icon,
        },
      }}
    />
  );
};

export default SearchInput;
