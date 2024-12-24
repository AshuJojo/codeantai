import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import Repository from "../types/Respository";
import RepositoryItem from "./RepositoryItem";
import SearchInput from "./SearchInput";

const RepositoriesCard = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<
    Repository[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/data/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: Repository[] = await response.json();
      setRepositories(data);
      setFilteredRepositories(data);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const updateFilteredRepository = (repositoriesArr: Repository[]) => {
    setFilteredRepositories(repositoriesArr);
  };

  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  return (
    <Paper
      sx={{
        height: "100%",
        maxHeight: "95vh",
        border: { xs: 0, md: "1px solid #E9EAEB" },
        overflow: 'hidden'
      }}
    >
      <Stack sx={{ height: "100%" }}>
        {/* Content */}
        <Stack sx={{ borderBottom: "1px solid #E9EAEB" }}>
          <Stack spacing={2.5} sx={{ px: { xs: 2, md: 3 }, py: 2.5 }}>
            {/* Header */}
            <Stack
              component="header"
              spacing={{ xs: 1.5 }}
              direction={{ xs: "column", md: "row" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction="column"
                spacing={{ xs: 0.5 }}
                sx={{ width: "fit-content" }}
              >
                <Typography variant="h2" sx={{ lineHeight: { xs: 1, md: 2 } }}>
                  Repositories
                </Typography>
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
                allRepositories={repositories}
                updateFilteredRepositories={updateFilteredRepository}
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
        <Stack sx={{ flexGrow: 1, overflowY: "scroll" }}>
          {loading && (
            <CircularProgress
              style={{ display: "block", margin: "auto auto" }}
            />
          )}
          {error && (
            <Typography
              variant="h2"
              color="error"
              sx={{
                textAlign: "center",
                alignSelf: "center",
                justifySelf: "center",
                my: "auto",
              }}
            >
              {error}
            </Typography>
          )}
          {filteredRepositories &&
            filteredRepositories.map((repository, idx) => (
              <RepositoryItem
                key={idx}
                repository={repository}
                isLast={idx === repositories.length - 1}
              />
            ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default RepositoriesCard;
