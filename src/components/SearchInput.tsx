import { SxProps, TextField, TextFieldProps } from "@mui/material";
import { useEffect, useState } from "react";
import Repository from "../types/Respository";

interface SearchInputProps {
  allRepositories: Repository[];
  updateFilteredRepositories: (repositories: Repository[]) => void;
  icon?: JSX.Element;
  sx?: SxProps;
  props?: TextFieldProps;
}

const SearchInput = ({
  allRepositories,
  updateFilteredRepositories,
  icon,
  sx,
  ...props
}: SearchInputProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
  };

  useEffect(() => {
    if (!searchText) {
      updateFilteredRepositories(allRepositories);
      return;
    }
    if (searchText) {
      const filteredRepositories = allRepositories.filter((repository) =>
        repository.repositoryName.includes(searchText)
      );

      updateFilteredRepositories(filteredRepositories);
    }
  }, [searchText]);

  return (
    <TextField
      {...props}
      value={searchText}
      onChange={handleInputChange}
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
