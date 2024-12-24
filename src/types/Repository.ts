/**
 * Represents a repository with its details.
 */
interface Repository {
  /**
   * The name of the repository.
   */
  repositoryName: string;

  /**
   * The visibility status of the repository (e.g., public, private).
   */
  visibility: string;

  /**
   * The primary programming language used in the repository.
   */
  language: string;

  /**
   * The size of the repository in kilobytes.
   */
  size: number;

  /**
   * The last updated timestamp of the repository.
   */
  last_updated: string;
}

export default Repository;
