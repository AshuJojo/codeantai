import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import SearchInput from "./SearchInput";

const RepositoriesCard = () => {
  return (
    <Paper sx={{ height: "100%" }}>
      {/* Content */}
      <Stack sx={{ borderBottom: "1px solid #E9EAEB" }}>
        <Stack spacing={2.5} sx={{ px: 3, py: 2.5 }}>
          {/* Header */}
          <Stack
            component="header"
            direction="row"
            sx={{ justifyContent: "space-between" }}
          >
            <Stack direction="column" sx={{ width: "fit-content" }}>
              <Typography variant="h2">Repositories</Typography>
              <Typography variant="caption">33 total repositories</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Button
                disableElevation
                variant="outlined"
                startIcon={<LuRefreshCw />}
              >
                Refresh All
              </Button>
              <Button disableElevation startIcon={<IoAdd />}>
                Add Repository
              </Button>
            </Stack>
          </Stack>
          {/* End Header */}
          {/* Search Box */}
          <Box>
            <SearchInput
              icon={<FiSearch size={24} style={{ marginRight: "8px" }} />}
              sx={{
                minWidth: "30%",
                borderRadius: 2,
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default RepositoriesCard;
