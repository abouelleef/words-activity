import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography gutterBottom variant="h3" textAlign="center">
        404 | NotFound
      </Typography>

      <Typography variant="body1" textAlign="center">
        <Link to="/">Return to home page</Link>
      </Typography>
    </Box>
  );
}

export default NotFound;
