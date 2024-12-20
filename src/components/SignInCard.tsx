import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import GithubLogo from "/src/assets/github-logo.svg?react";
import BitBucketLogo from "/src/assets/bitbucket-logo.svg?react";
import AzureDevopsLogo from "/src/assets/azure-devops-logo.svg?react";
import GitlabLogo from "/src/assets/gitlab-logo.svg?react";
import SSOLogo from "/src/assets/sso-logo.svg?react";
import { useNavigate } from "react-router";

const SignInCard = () => {
  const sassBtns = [
    {
      icon: <GithubLogo />,
      name: "Sign in with Github",
    },
    {
      icon: <BitBucketLogo />,
      name: "Sign in with Bitbucket",
    },
    {
      icon: <AzureDevopsLogo />,
      name: "Sign in with Azure Devops",
    },
    {
      icon: <GitlabLogo />,
      name: "Sign in with GitLab",
    },
  ];
  const selfHostedBtns = [
    {
      icon: <GitlabLogo />,
      name: "Self Hosted GitLab",
    },
    {
      icon: <SSOLogo />,
      name: "Sign in with SSO",
    },
  ];

  const [selectedTab, setSelectedTab] = useState<string>("sass");
  const navigate = useNavigate();

  const handleTabChange = (
    event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  const handleBtnClick = () => {
    navigate("/dashboard");
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "42rem",
        minHeight: "30rem",
      }}
    >
      <Stack spacing={1.25} sx={{ px: "1.5rem", py: "2.25rem" }}>
        <Stack spacing={2.25}>
          <Box
            component="img"
            height="2.5rem"
            width="auto"
            src="logo-long.svg"
          />
          <Typography variant="h1">Welcome to CodeAnt AI</Typography>
        </Stack>

        <ToggleButtonGroup
          value={selectedTab}
          exclusive
          onChange={handleTabChange}
          size="small"
          fullWidth
        >
          <ToggleButton value="sass" sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">SASS</Typography>
          </ToggleButton>
          <ToggleButton value="self-hosted" sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Self Hosted</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Divider />
      <Stack spacing={1} sx={{ py: 3, px: 1, alignItems: "center" }}>
        {selectedTab === "sass" &&
          sassBtns.map((btn, idx) => (
            <Button
              key={idx}
              variant="outlined"
              sx={{ width: "100%", maxWidth: "27.875rem", py: 1 }}
              startIcon={btn.icon}
              onClick={handleBtnClick}
            >
              {btn.name}
            </Button>
          ))}
        {selectedTab === "self-hosted" &&
          selfHostedBtns.map((btn, idx) => (
            <Button
              key={idx}
              variant="outlined"
              sx={{ width: "100%", maxWidth: "27.875rem", py: 1 }}
              startIcon={btn.icon}
              onClick={handleBtnClick}
            >
              {btn.name}
            </Button>
          ))}
      </Stack>
    </Paper>
  );
};

export default SignInCard;
