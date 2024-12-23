import { Badge, Stack, Typography } from "@mui/material";
import Repository from "../types/Respository";

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <Stack sx={{ py: 3 }}>
      <Stack sx={{ px: 3 }}>
        <Stack direction="row">
          <Typography variant="subtitle2">
            {repository.repositoryName}
          </Typography>
          <Badge>{repository.visibility}</Badge>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RepositoryItem;
