import Repository from "../types/Respository";

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return <div>{repository.repositoryName}</div>;
};

export default RepositoryItem;
