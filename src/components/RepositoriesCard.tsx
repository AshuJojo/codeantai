import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import SearchInput from "./SearchInput";
import Repository from "../types/Respository";
import { useEffect, useState } from "react";

const RepositoriesCard = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Repository[] = await response.json();
        console.log('data', data);
        setRepositories(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
