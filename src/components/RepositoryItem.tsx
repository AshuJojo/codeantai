import { alpha, Chip, Stack, Typography, useTheme } from "@mui/material";
import Repository from "../types/Respository";
import { GoDotFill } from "react-icons/go";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { formatDistance } from "date-fns";

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  const theme = useTheme();

  const getRelativeTimeFromToday = (dateStr: string) => {
    const date: Date = new Date(dateStr);
    const todayDate: number = Date.now();

    return formatDistance(date, todayDate, { addSuffix: true });
  };

  return (
    <Stack spacing={1.5} sx={{ p: 3, borderBottom: "1px solid #D5D7DA" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="subtitle2">{repository.repositoryName}</Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label={repository.visibility}
        />
      </Stack>
      <Stack direction="row" spacing={5}>
        <Typography>
          {repository.language}{" "}
          <GoDotFill
            color={theme.palette.primary.main}
            style={{ verticalAlign: "text-top" }}
          />
        </Typography>
        <Typography>
          <HiOutlineCircleStack style={{ verticalAlign: "text-bottom" }} />{" "}
          {repository.size} KB{" "}
        </Typography>
        <Typography>
          Updated {getRelativeTimeFromToday(repository.last_updated)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RepositoryItem;
